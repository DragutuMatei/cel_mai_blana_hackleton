package com.bezkoder.spring.login.payload.request;

public class AplicaRequest {
    int id;

    public AplicaRequest() {
    }

    public AplicaRequest(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
