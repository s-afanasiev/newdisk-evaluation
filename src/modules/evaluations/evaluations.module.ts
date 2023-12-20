import { Module } from '@nestjs/common';
import { EvaluationsService } from './evaluations.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EvaluationEntity } from './evaluation.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([EvaluationEntity])
  ],
  controllers: [],
  providers: [EvaluationsService],
  exports: [EvaluationsService]
})
export class EvaluationsModule {}
