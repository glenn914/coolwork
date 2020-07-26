import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StuinfoModule } from './stuinfo/stuinfo.module';
import { TypegooseModule } from 'nestjs-typegoose';

@Module({
  imports: [
    TypegooseModule.forRoot("mongodb://localhost/stuinfo-api",{
      useNewUrlParser:true,
      useUnifiedTopology:true,
      useCreateIndex:true,
      useFindAndModify:false
    }),
    StuinfoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
