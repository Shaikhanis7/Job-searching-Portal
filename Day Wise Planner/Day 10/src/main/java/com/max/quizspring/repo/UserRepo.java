// package com.max.quizspring.repo;

// import java.util.Optional;
// import org.springframework.data.jpa.repository.JpaRepository;
// import com.max.quizspring.model.User;

// public interface UserRepo extends JpaRepository<User, Long> {
//     Optional<User> findByEmail(String email);
// }

package com.max.quizspring.repo;

import com.max.quizspring.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepo extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);

    boolean existsByEmail(String email);
}
