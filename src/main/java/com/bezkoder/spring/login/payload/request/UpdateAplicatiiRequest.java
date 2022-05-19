package com.bezkoder.spring.login.payload.request;

public class UpdateAplicatiiRequest {
    private long id;

    private boolean accept;

    public boolean isAccept() {
        return accept;
    }

    public void setAccept(boolean accept) {
        this.accept = accept;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
}
