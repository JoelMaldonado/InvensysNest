import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @IsString({ message: 'User debe ser un string' })
  @IsNotEmpty({ message: 'User no debe estar vacío' })
  user: string;

  @IsString({ message: 'Pass debe ser un string' })
  @IsNotEmpty({ message: 'Pass no debe estar vacío' })
  pass: string;
}
