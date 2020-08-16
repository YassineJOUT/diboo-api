import { ObjectType, Field } from '@nestjs/graphql';
import { SiteType } from './site.type';

@ObjectType()
export class SiteSettingResponseType{
  @Field({ nullable: true })
  readonly ok: boolean;
  @Field({ nullable: true })
  readonly error: string;
  @Field({ nullable: true })
  readonly message: string;
  @Field(()=> SiteType,{ nullable: true })
  readonly data: SiteType;
}
