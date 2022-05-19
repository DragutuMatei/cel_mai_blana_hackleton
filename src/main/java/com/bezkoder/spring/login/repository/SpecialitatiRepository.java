package com.bezkoder.spring.login.repository;

import com.bezkoder.spring.login.models.ERole;
import com.bezkoder.spring.login.models.ESpecialiati;
import com.bezkoder.spring.login.models.Specialitati;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SpecialitatiRepository extends JpaRepository<Specialitati, Integer> {
    List<Specialitati> findAll();

    // Optional<Specialitati> findByName(String specialiati);

}
