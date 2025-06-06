import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')

export class AuthController {
    constructor(private authService: AuthService) {
        console.log(this.authService.test())
    }

    @Post('signup')
    signup() {
        return this.authService.signup();
    };

    @Post('auth/signin')
    signin() {
        return this.authService.signin();
    }
}