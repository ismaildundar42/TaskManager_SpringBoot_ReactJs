package com.ismail.taskmanager.repository;

import com.ismail.taskmanager.model.task;
import lombok.extern.java.Log;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<task, Long> {

    // kategoriye göre görevi bul
    List<task> findByCategory(String category);

    // tamamlama durumuna göre görev bul
    List<task> findByCompleted(Boolean completed);

    // Önceliğe göre görevleri bul
    List<task> findByPriority(String priority);

    // Başlıkta arama yap (case-insensitive)
    List<task> findByTitleContainingIgnoreCase(String title);

}
