import { InputType, Field, Int } from '@nestjs/graphql';
import { IsEmail, IsInt, IsNotEmpty, Min, MinLength } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsNotEmpty()
  @MinLength(10)
  name: string;

  @Field()
  @IsEmail()
  email: string;

  @Field(() => Int)
  @IsInt()
  @Min(1)
  age: number;
}
