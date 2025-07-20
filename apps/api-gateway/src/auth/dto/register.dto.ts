import { IsEmail, IsEnum, IsString } from 'class-validator';
import { UserRole } from '@app/database/entities/user.entity';

export class RegisterDto {
  @IsEmail()
  email: string;

  @IsString()
  name: string;

  @IsString()
  password: string;

  @IsEnum(UserRole)
  role: UserRole;
}
