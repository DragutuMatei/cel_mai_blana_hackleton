package com.bezkoder.spring.login.models;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "aplicatii")
public class Aplicatii {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int id_facultate;

    @NotBlank
    private String rezultat;

    public Aplicatii() {
    }

    @Override
    public String toString() {
        return "Aplicatii{" +
                "id=" + id +
                ", id_facultate=" + id_facultate +
                ", rezultat='" + rezultat + '\'' +
                '}';
    }

    public String getRezultat() {
        return rezultat;
    }

    public void setRezultat(String rezultat) {
        this.rezultat = rezultat;
    }

    public Aplicatii(int id_user, int id_facultate, String rezultat) {
        this.id_facultate = id_facultate;
        this.rezultat = rezultat;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public int getId_facultate() {
        return id_facultate;
    }

    public void setId_facultate(int id_facultate) {
        this.id_facultate = id_facultate;
    }
}
