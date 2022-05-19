package com.bezkoder.spring.login.models;

import javax.persistence.*;

@Entity
@Table(name = "specialitati")
public class Specialitati {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(length = 100)
    private ESpecialiati spec;

    public Specialitati() {
    }

    @Override
    public String toString() {
        return "Specialitati{" +
                "id=" + id +
                ", spec=" + spec +
                '}';
    }

    public Specialitati(ESpecialiati spec) {
        this.spec = spec;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ESpecialiati getSpec() {
        return spec;
    }

    public void setSpec(ESpecialiati spec) {
        this.spec = spec;
    }
}
