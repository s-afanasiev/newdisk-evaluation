import { Body, Controller, Post } from "@nestjs/common";
import { AuthClientDto } from "./auth-client.dto";
import { AuthService } from "./auth.service";
import { SetAuthModeOff } from "./auth.decorator";

@Controller('api/auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) {}

    @SetAuthModeOff()
    @Post()
    async reg(@Body() body: AuthClientDto) {
        console.log("AuthController.reg...");
        return await this.authService.reg(body);
    }
}