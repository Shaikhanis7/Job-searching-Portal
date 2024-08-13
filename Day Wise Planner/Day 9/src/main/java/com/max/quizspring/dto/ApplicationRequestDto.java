// package com.max.quizspring.dto;

// import lombok.AllArgsConstructor;
// import lombok.Data;
// import lombok.NoArgsConstructor;

// @Data
// @NoArgsConstructor
// @AllArgsConstructor
// public class ApplicationRequestDto {
//     private Long jobId;
//     private String status;
// }

package com.max.quizspring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ApplicationRequestDto {
    private Long jobId;
    private String status;
    private String company;
    private Double salary;
    private String email;
    private String phone;
}
