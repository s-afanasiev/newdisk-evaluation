import { Body, Controller, Post } from "@nestjs/common";
import { AuthClientDto } from "./auth-client.dto";
import { AuthService } from "./auth.service";
import { SetAuthModeOff } from "./auth.decorator";
import { ApiCreatedResponse, ApiTags } from "@nestjs/swagger";
import { AuthClientAnswerDto } from "./auth-client-answer.dto";

@ApiTags("Auth")
@Controller('api/auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) {}

    @SetAuthModeOff()
    @Post()
    @ApiCreatedResponse({description: 'token created', type: AuthClientAnswerDto})
    async reg(@Body() body: AuthClientDto) {
        return await this.authService.reg(body);
    }
}