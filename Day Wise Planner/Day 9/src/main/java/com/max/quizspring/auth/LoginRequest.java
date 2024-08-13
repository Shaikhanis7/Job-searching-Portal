// package com.max.quizspring.auth;

// import lombok.AllArgsConstructor;
// import lombok.Builder;
// import lombok.Data;

// @Data
// @Builder
// @AllArgsConstructor
// public class LoginRequest {
//     private String email;
//     private String password;
// }

package com.max.quizspring.auth;

public class LoginRequest {

    private String email;
    private String password;

    // Getters and Setters

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
