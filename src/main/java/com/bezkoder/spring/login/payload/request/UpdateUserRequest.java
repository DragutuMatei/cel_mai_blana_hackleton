package com.bezkoder.spring.login.payload.request;

import com.bezkoder.spring.login.models.Dosar;
import org.springframework.lang.Nullable;

import javax.validation.constraints.NotBlank;
import java.util.List;

public class UpdateUserRequest {
    @NotBlank
    private Long id;

    @Nullable
    private String email;

    @Nullable
    private String profil;

    @Nullable
    private float bac;

    @Nullable
    private String scrisoare;

    @Nullable
    private String rezumat;

    @Nullable
    private List<String> dosar;

    @Override
    public String toString() {
        return "UpdateUserRequest{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", profil='" + profil + '\'' +
                ", bac=" + bac +
                ", scrisoare='" + scrisoare + '\'' +
                ", rezumat='" + rezumat + '\'' +
                ", dosar=" + dosar +
                '}';
    }

    @Nullable
    public List<String> getDosar() {
        return dosar;
    }

    public void setDosar(@Nullable List<String> dosar) {
        this.dosar = dosar;
    }

    @Nullable
    public String getProfil() {
        return profil;
    }

    public void setProfil(@Nullable String profil) {
        this.profil = profil;
    }

    public float getBac() {
        return bac;
    }

    public void setBac(float bac) {
        this.bac = bac;
    }

    @Nullable
    public String getScrisoare() {
        return scrisoare;
    }

    public void setScrisoare(@Nullable String scrisoare) {
        this.scrisoare = scrisoare;
    }

    @Nullable
    public String getRezumat() {
        return rezumat;
    }

    public void setRezumat(@Nullable String rezumat) {
        this.rezumat = rezumat;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Nullable
    public String getEmail() {
        return email;
    }

    public void setEmail(@Nullable String email) {
        this.email = email;
    }
}
