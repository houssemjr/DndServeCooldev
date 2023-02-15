package com.houssem.testpidev.Repository;

import com.houssem.testpidev.Entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface userRepository extends MongoRepository<User,Long> {
}
