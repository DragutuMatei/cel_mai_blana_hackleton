package com.bezkoder.spring.login.models;

import org.springframework.lang.Nullable;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Null;
import javax.validation.constraints.Size;

@Entity
@Table(name = "users",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "username"),
                @UniqueConstraint(columnNames = "email")
        })
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(max = 20)
    private String username;

    @NotBlank
    @Size(max = 50)
    @Email
    private String email;

    @NotBlank
    @Size(max = 120)
    private String password;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();


    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "user_aplicatii",
            joinColumns = @JoinColumn(name = "aplicatii_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id"))
    private Set<Aplicatii> aplicatii = new HashSet<>();

    public Set<Aplicatii> getAplicatii() {
        return aplicatii;
    }

    public void setAplicatii(Set<Aplicatii> aplicatii) {
        this.aplicatii = aplicatii;
    }

    public Dosar getDosar() {
        return dosar;
    }

    public void setDosar(Dosar dosar) {
        this.dosar = dosar;
    }

    @Nullable
    private String profil;

    @Nullable
    private float bac;

    @Nullable
    private String scrisoare;

    @OneToOne(cascade = CascadeType.ALL, mappedBy = "user")
    private Dosar dosar;

    @Nullable
    private String rezumat;

    @Nullable
    private String oras;

    @ManyToMany
    @JoinTable(name = "user_specialitati",
            joinColumns = @JoinColumn(name = "specialitati_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id"))
    private Set<Specialitati> specialitati = new HashSet<>();

    @Nullable
    @Column(columnDefinition = "integer default 0")
    private int locuri;

    @Nullable
    private boolean examen;

    @Nullable
    @Column(columnDefinition = "integer default 0")
    private int taxa;

    public Set<Specialitati> getSpecialitati() {
        return specialitati;
    }

    public void setSpecialitati(Set<Specialitati> specialitati) {
        this.specialitati = specialitati;
    }

    @Nullable
    @Column(columnDefinition = "float default 0")
    private float medie;

    @Nullable
    private  String link;

    public boolean isExamen() {
        return examen;
    }

    @Nullable
    public String getLink() {
        return link;
    }

    public void setLink(@Nullable String link) {
        this.link = link;
    }

    @Nullable
    public String getOras() {
        return oras;
    }

    public void setOras(@Nullable String oras) {
        this.oras = oras;
    }


    @Nullable
    public int getLocuri() {
        return locuri;
    }

    public void setLocuri(@Nullable int locuri) {
        this.locuri = locuri;
    }

    @Nullable
    public boolean getExamen() {
        return examen;
    }

    public void setExamen(@Nullable boolean examen) {
        this.examen = examen;
    }

    public int getTaxa() {
        return taxa;
    }

    public void setTaxa(int taxa) {
        this.taxa = taxa;
    }

    public float getMedie() {
        return medie;
    }

    public void setMedie(float medie) {
        this.medie = medie;
    }

    @Nullable
    public String getRezumat() {
        return rezumat;
    }

    public void setRezumat(@Nullable String rezumat) {
        this.rezumat = rezumat;
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

    public String getScrisoare() {
        return scrisoare;
    }

    public void setScrisoare(String scrisoare) {
        this.scrisoare = scrisoare;
    }

    public User() {
    }

    public User(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

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

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", roles=" + roles +
                ", aplicatii=" + aplicatii +
                ", profil='" + profil + '\'' +
                ", bac=" + bac +
                ", scrisoare=" + scrisoare +
                ", dosar=" + dosar +
                ", rezumat='" + rezumat + '\'' +
                ", oras='" + oras + '\'' +
                ", specialitati=" + specialitati +
                ", locuri=" + locuri +
                ", examen=" + examen +
                ", taxa=" + taxa +
                ", medie=" + medie +
                '}';
    }
}
