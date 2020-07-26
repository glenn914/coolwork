import { Module } from '@nestjs/common';
import { StuinfoController } from './stuinfo.controller';
import { TypegooseModule } from 'nestjs-typegoose'
import { Stuinfo } from './stuinfo.model';

@Module({
  imports:[
    TypegooseModule.forFeature([Stuinfo])   //这边就生成了模型
  ],
  controllers: [StuinfoController]
})
export class StuinfoModule {}
