import { Module } from '@nestjs/common';
import { EvaluationsService } from './evaluations.service';

@Module({
  controllers: [],
  providers: [EvaluationsService]
})
export class EvaluationsModule {}
