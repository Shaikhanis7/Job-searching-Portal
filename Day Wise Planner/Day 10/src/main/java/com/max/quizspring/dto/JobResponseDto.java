package com.max.quizspring.dto;

import lombok.Data;

@Data
public class JobResponseDto {
    private Long id;
    private String title;
    private String description;
    private Long companyId;
    private String salary;
    private String location;
    private String type;
    private String requirements;
    private String benefits;
}
