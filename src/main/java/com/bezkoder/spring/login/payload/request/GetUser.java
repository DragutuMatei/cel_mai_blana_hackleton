package com.bezkoder.spring.login.payload.request;

public class GetUser {
    private String token;

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
