package com.ismail.taskmanager.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class TaskCreateDTO {

    @NotBlank(message = "Başlık boş olamaz")
    private String title;

    private String description;

    @NotBlank(message = "Öncelik boş olamaz")
    private String priority; // LOW, MEDIUM, HIGH

    @NotNull(message = "Kategori boş olamaz")
    private String category;

    // Boş Constructor
    public TaskCreateDTO() {
    }

    // Parametreli Constructor
    public TaskCreateDTO(String title, String description, String priority, String category) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.category = category;
    }

    // Getter ve Setter'lar
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPriority() {
        return priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}