import { v4 as uuidv4 } from "uuid";
import { Injectable } from "@nestjs/common";
import { AuthClientDto } from "./auth-client.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { AuthEntity } from "./auth.entity";
import { Repository } from "typeorm";

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(AuthEntity) private authRepo: Repository<AuthEntity>
    ) {}

    async reg(body: AuthClientDto) {
        //@TODO: hash password before saving
        //@TODO: body.pass = argon2.hash(body.pass);
        const exist = await this.authRepo.findOne(body as Object)
        if(exist){
            return exist.token;
        } else {
            const token = uuidv4().replace(/\-/gi, "");
            await this.authRepo.save(Object.assign(body, {token}));
            return token;
        }
    }

    public async checkToken(token: string) {
        const authToken = await this.authRepo.findOne({token} as Object);
        return !!authToken;
    }
}