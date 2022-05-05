import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FuentesModule } from './fuentes/fuentes.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    FuentesModule,
    MongooseModule.forRoot('mongodb://localhost/fuentes'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
