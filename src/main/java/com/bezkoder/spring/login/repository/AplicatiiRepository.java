package com.bezkoder.spring.login.repository;

import com.bezkoder.spring.login.models.Aplicatii;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AplicatiiRepository extends JpaRepository<Aplicatii, Long> {
}
