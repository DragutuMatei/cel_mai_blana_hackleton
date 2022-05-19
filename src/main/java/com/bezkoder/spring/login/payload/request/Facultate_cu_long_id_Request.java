package com.bezkoder.spring.login.payload.request;

public class Facultate_cu_long_id_Request {
    private long id;

    public Facultate_cu_long_id_Request(long id) {
        this.id = id;
    }

    public Facultate_cu_long_id_Request() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
}
