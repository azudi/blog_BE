import { Injectable } from "@nestjs/common";

@Injectable({})

export class AuthService {
    test(): string {
        return "AuthService is working!";
    }

    signin() {
        return { msg: "i am signup" }
    }

    signup() {
        return { msg: "i am signin" }
    }
}