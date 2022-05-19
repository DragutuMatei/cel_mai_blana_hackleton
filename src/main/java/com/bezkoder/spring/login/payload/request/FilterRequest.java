package com.bezkoder.spring.login.payload.request;

import org.springframework.lang.Nullable;

public class FilterRequest {
    @Nullable
    private String oras;

    @Nullable
    private boolean admitere;

    @Nullable
    private float taxa;

    @Nullable
    private float medie;

    @Override
    public String toString() {
        return "FilterRequest{" +
                "oras='" + oras + '\'' +
                ", admitere=" + admitere +
                ", taxa=" + taxa +
                ", medie=" + medie +
                '}';
    }

    @Nullable
    public String getOras() {
        return oras;
    }

    public void setOras(@Nullable String oras) {
        this.oras = oras;
    }

    public boolean isAdmitere() {
        return admitere;
    }

    public void setAdmitere(boolean admitere) {
        this.admitere = admitere;
    }

    public float getTaxa() {
        return taxa;
    }

    public void setTaxa(float taxa) {
        this.taxa = taxa;
    }

    public float getMedie() {
        return medie;
    }

    public void setMedie(float medie) {
        this.medie = medie;
    }

    public FilterRequest(@Nullable String oras, boolean admitere, float taxa, float medie) {
        this.oras = oras;
        this.admitere = admitere;
        this.taxa = taxa;
        this.medie = medie;
    }
}
