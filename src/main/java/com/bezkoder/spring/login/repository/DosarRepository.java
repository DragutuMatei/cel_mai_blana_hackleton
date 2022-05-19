package com.bezkoder.spring.login.repository;

import com.bezkoder.spring.login.models.Dosar;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DosarRepository extends JpaRepository<Dosar, Long> {
}
