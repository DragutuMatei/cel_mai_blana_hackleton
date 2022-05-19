package com.bezkoder.spring.login.models;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "dosar")
public class Dosar {
    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @MapsId("id")
    @OneToOne
    @JoinColumn(name = "id")
    private User user;

    @NotBlank
    private String file1;

    @NotBlank
    private String file2;

    @NotBlank
    private String file3;

    public Dosar() {
    }

    public Dosar( String file1, String file2, String file3) {
        this.file1 = file1;
        this.file2 = file2;
        this.file3 = file3;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFile1() {
        return file1;
    }

    public void setFile1(String file1) {
        this.file1 = file1;
    }

    public String getFile2() {
        return file2;
    }

    public void setFile2(String file2) {
        this.file2 = file2;
    }

    public String getFile3() {
        return file3;
    }

    public void setFile3(String file3) {
        this.file3 = file3;
    }
}
