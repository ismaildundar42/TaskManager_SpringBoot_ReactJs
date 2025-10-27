package com.ismail.taskmanager.controller;


import com.ismail.taskmanager.dto.TaskCreateDTO;
import com.ismail.taskmanager.dto.TaskDTO;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.ismail.taskmanager.service.TaskService;

import java.util.List;

@RestController
@RequestMapping("/api/tasks")
@CrossOrigin(origins = "*") // React'ten gelen isteklere izin ver
public class TaskController {

    private final TaskService taskService;

    // Constructor
    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    // Tüm görevleri getir
    // GET http://localhost:8080/api/tasks
    @GetMapping
    public ResponseEntity<List<TaskDTO>> getAllTasks() {
        List<TaskDTO> tasks = taskService.getAllTasks();
        return ResponseEntity.ok(tasks);
    }

    // ID'ye göre görev getir
    // GET http://localhost:8080/api/tasks/1
    @GetMapping("/{id}")
    public ResponseEntity<TaskDTO> getTaskById(@PathVariable Long id) {
        TaskDTO task = taskService.getTaskById(id);
        return ResponseEntity.ok(task);
    }

    // Yeni görev oluştur
    // POST http://localhost:8080/api/tasks
    @PostMapping
    public ResponseEntity<TaskDTO> createTask(@Valid @RequestBody TaskCreateDTO createDTO) {
        TaskDTO createdTask = taskService.createTask(createDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdTask);
    }

    // Görevi güncelle
    // PUT http://localhost:8080/api/tasks/1
    @PutMapping("/{id}")
    public ResponseEntity<TaskDTO> updateTask(
            @PathVariable Long id,
            @Valid @RequestBody TaskCreateDTO updateDTO) {
        TaskDTO updatedTask = taskService.updateTask(id, updateDTO);
        return ResponseEntity.ok(updatedTask);
    }

    // Görev durumunu değiştir (tamamlandı/tamamlanmadı)
    // PATCH http://localhost:8080/api/tasks/1/toggle
    @PatchMapping("/{id}/toggle")
    public ResponseEntity<TaskDTO> toggleTaskCompletion(@PathVariable Long id) {
        TaskDTO updatedTask = taskService.toggleTaskCompletion(id);
        return ResponseEntity.ok(updatedTask);
    }

    // Görevi sil
    // DELETE http://localhost:8080/api/tasks/1
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTask(@PathVariable Long id) {
        taskService.deleteTask(id);
        return ResponseEntity.noContent().build();
    }

    // Kategoriye göre görevleri getir
    // GET http://localhost:8080/api/tasks/category/Work
    @GetMapping("/category/{category}")
    public ResponseEntity<List<TaskDTO>> getTasksByCategory(@PathVariable String category) {
        List<TaskDTO> tasks = taskService.getTasksByCategory(category);
        return ResponseEntity.ok(tasks);
    }

    // Tamamlanma durumuna göre görevleri getir
    // GET http://localhost:8080/api/tasks/status?completed=true
    @GetMapping("/status")
    public ResponseEntity<List<TaskDTO>> getTasksByStatus(
            @RequestParam Boolean completed) {
        List<TaskDTO> tasks = taskService.getTasksByStatus(completed);
        return ResponseEntity.ok(tasks);
    }

    // Başlıkta arama yap
    // GET http://localhost:8080/api/tasks/search?keyword=meeting
    @GetMapping("/search")
    public ResponseEntity<List<TaskDTO>> searchTasksByTitle(
            @RequestParam String keyword) {
        List<TaskDTO> tasks = taskService.searchTasksByTitle(keyword);
        return ResponseEntity.ok(tasks);
    }
}
