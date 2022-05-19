package com.bezkoder.spring.login.payload.request;

import com.bezkoder.spring.login.models.ESpecialiati;
import org.springframework.lang.Nullable;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;
import java.util.List;
import java.util.Set;

public class FacultaRequest {

    @NotBlank
    private Long id;

    @Nullable
    private String oras;

    @Nullable
    private int locuri;

    @Nullable
    private String email;

    @Nullable
    private float medie;

    @Nullable
    private boolean examen;

    private Set<String> specialiati;

    @Nullable
    private int taxa;

    @Nullable
    private String profil;

    @Nullable
    private String link;

    @Nullable
    public String getLink() {
        return link;
    }

    public void setLink(@Nullable String link) {
        this.link = link;
    }

    @Override
    public String toString() {
        return "FacultaRequest{" +
                "id=" + id +
                ", oras='" + oras + '\'' +
                ", locuri=" + locuri +
                ", email='" + email + '\'' +
                ", medie=" + medie +
                ", examen=" + examen +
                ", specialiati=" + specialiati +
                ", taxa=" + taxa +
                '}';
    }

    //    public FacultaRequest() {
//    }
//
//    public FacultaRequest(Long id, @Nullable String oras, int locuri, @Nullable String email, @Nullable Set<String> specialiati, float media, int taxa) {
//        this.id = id;
//        this.oras = oras;
//        this.locuri = locuri;
//        this.email = email;
//        this.specialiati = specialiati;
//        this.media = media;
//        this.taxa = taxa;
//    }

    @Nullable
    public String getProfil() {
        return profil;
    }

    public void setProfil(@Nullable String profil) {
        this.profil = profil;
    }
    public float getMedie() {
        return medie;
    }

    public void setMedie(float medie) {
        this.medie = medie;
    }

    public boolean isExamen() {
        return examen;
    }

    public void setExamen(boolean examen) {
        this.examen = examen;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Nullable
    public String getOras() {
        return oras;
    }

    public void setOras(@Nullable String oras) {
        this.oras = oras;
    }

    public int getLocuri() {
        return locuri;
    }

    public void setLocuri(int locuri) {
        this.locuri = locuri;
    }

    @Nullable
    public String getEmail() {
        return email;
    }

    public void setEmail(@Nullable String email) {
        this.email = email;
    }

    public Set<String> getSpecialiati() {
        return specialiati;
    }

    public void setSpecialiati(Set<String> specialiati) {
        this.specialiati = specialiati;
    }

    public int getTaxa() {
        return taxa;
    }

    public void setTaxa(int taxa) {
        this.taxa = taxa;
    }
}
