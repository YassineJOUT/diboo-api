import { ObjectType, Field } from '@nestjs/graphql';
import { AdminType } from 'src/admin/type/admin.type';

@ObjectType()
export class ResponseType{
  @Field({ nullable: true })
  readonly ok: boolean;
  @Field({ nullable: true })
  readonly error: string;
  @Field(()=> AdminType,{ nullable: true })
  readonly data: AdminType;
}
