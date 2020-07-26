import { prop } from '@typegoose/typegoose'

export class Stuinfo {
  @prop()
  stuName: string
  @prop()
  stuAge: string
  @prop()
  stuClass: string
}

