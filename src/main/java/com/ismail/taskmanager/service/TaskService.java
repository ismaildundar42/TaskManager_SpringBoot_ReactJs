package com.ismail.taskmanager.service;

import com.ismail.taskmanager.dto.TaskCreateDTO;
import com.ismail.taskmanager.dto.TaskDTO;
import com.ismail.taskmanager.model.task;
import com.ismail.taskmanager.repository.TaskRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class TaskService {

    private final TaskRepository taskRepository;

    // Constructor - SADECE BİR TANE!
    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    // Tüm görevleri getir
    public List<TaskDTO> getAllTasks() {
        return taskRepository.findAll().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    // ID'ye göre görev getir
    public TaskDTO getTaskById(Long id) {
        task taskEntity = taskRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Görev bulunamadı: " + id));
        return convertToDTO(taskEntity);
    }

    // Yeni görev oluştur
    public TaskDTO createTask(TaskCreateDTO createDTO) {
        task taskEntity = new task();
        taskEntity.setTitle(createDTO.getTitle());
        taskEntity.setDescription(createDTO.getDescription());
        taskEntity.setPriority(createDTO.getPriority());
        taskEntity.setCategory(createDTO.getCategory());
        taskEntity.setCompleted(false);

        task savedTask = taskRepository.save(taskEntity);
        return convertToDTO(savedTask);
    }

    // Görevi güncelle
    public TaskDTO updateTask(Long id, TaskCreateDTO updateDTO) {
        task taskEntity = taskRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Görev bulunamadı: " + id));

        taskEntity.setTitle(updateDTO.getTitle());
        taskEntity.setDescription(updateDTO.getDescription());
        taskEntity.setPriority(updateDTO.getPriority());
        taskEntity.setCategory(updateDTO.getCategory());

        task updatedTask = taskRepository.save(taskEntity);
        return convertToDTO(updatedTask);
    }

    // Görev durumunu değiştir (tamamlandı/tamamlanmadı)
    public TaskDTO toggleTaskCompletion(Long id) {
        task taskEntity = taskRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Görev bulunamadı: " + id));

        taskEntity.setCompleted(!taskEntity.getCompleted());
        task updatedTask = taskRepository.save(taskEntity);
        return convertToDTO(updatedTask);
    }

    // Görevi sil
    public void deleteTask(Long id) {
        if (!taskRepository.existsById(id)) {
            throw new RuntimeException("Görev bulunamadı: " + id);
        }
        taskRepository.deleteById(id);
    }

    // Kategoriye göre görevleri getir
    public List<TaskDTO> getTasksByCategory(String category) {
        return taskRepository.findByCategory(category).stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    // Tamamlanma durumuna göre görevleri getir
    public List<TaskDTO> getTasksByStatus(Boolean completed) {
        return taskRepository.findByCompleted(completed).stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    // Başlıkta arama yap
    public List<TaskDTO> searchTasksByTitle(String keyword) {
        return taskRepository.findByTitleContainingIgnoreCase(keyword).stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    // Entity'yi DTO'ya çevir (Helper metod)
    private TaskDTO convertToDTO(task taskEntity) {
        TaskDTO dto = new TaskDTO();
        dto.setId(taskEntity.getId());
        dto.setTitle(taskEntity.getTitle());
        dto.setDescription(taskEntity.getDescription());
        dto.setPriority(taskEntity.getPriority());
        dto.setCompleted(taskEntity.getCompleted());
        dto.setCategory(taskEntity.getCategory());
        dto.setCreatedAt(taskEntity.getCreatedAt());
        dto.setUpdatedAt(taskEntity.getUpdatedAt());
        return dto;
    }
}