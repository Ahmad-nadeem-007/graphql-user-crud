import { InputType, Field, Int } from '@nestjs/graphql';
import { IsEmail, IsInt, IsNotEmpty, Min } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsNotEmpty()
  name: string;

  @Field()
  @IsEmail()
  email: string;

  @Field(() => Int)
  @IsInt()
  @Min(1)
  age: number;
}
