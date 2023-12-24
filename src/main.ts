import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory, Reflector } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger/dist/document-builder';
import { SwaggerModule } from '@nestjs/swagger/dist/swagger-module';
import { AppModule } from './app.module';
import { validateEnvironmentVars } from './config/configuration';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './modules/simplest-auth/auth.service';

const path = require('path');
const fs = require('fs');

async function bootstrap() {
  validateEnvironmentVars();
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const authService = app.get(AuthService);
  const reflector = app.get(Reflector);

  app.useGlobalGuards(new AuthGuard(authService, reflector))

  const options = new DocumentBuilder()
    .setTitle("NewDisk Pupil API's")
    .setDescription("List of API's available")
    .setVersion('1.0')
    .addSecurity("Token auth", {
      type: "apiKey",
      in: "header",
      name: "authorization",
    })
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document,{
    swaggerOptions: {
      displayRequestDuration: true,
      persistAuthorization: true,
    },
  });

  save_swagger_doc_on_fs(document, console);

  const port = configService.get('port');
  await app.listen(port);
  Logger.log(`Appplication started on port: ${port}`);
}
bootstrap();

function save_swagger_doc_on_fs(doc, logger) {
  const filePath = path.resolve(__dirname, "..", "open-api-spec.json");
  fs.writeFile(filePath, JSON.stringify(doc, null, 2), (err) => {
    if (err) {
      logger.error(
        `Can't write OpenAPI Spec to ${filePath}:\n ${JSON.stringify(err, null, 2)}`,
        undefined,
      );
    } else {
      logger.log(`OpenAPI Spec available in ${filePath}`);
    }
  });
}