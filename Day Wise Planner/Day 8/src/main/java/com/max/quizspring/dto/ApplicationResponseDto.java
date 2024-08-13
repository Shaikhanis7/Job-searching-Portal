// package com.max.quizspring.dto;

// import lombok.AllArgsConstructor;
// import lombok.Data;
// import lombok.NoArgsConstructor;

// @Data
// @NoArgsConstructor
// @AllArgsConstructor
// public class ApplicationResponseDto {
//     private Long id;
//     private String status;
//     private Long jobId;
// }

package com.max.quizspring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ApplicationResponseDto {
    private Long id;
    private String status;
    private Long jobId;
    private String company;
    private Double salary;
    private String email;
    private String phone;
}
