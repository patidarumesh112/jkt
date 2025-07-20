import { IsEnum } from 'class-validator';
import { UserRole } from '@app/database/entities/user.entity';

export class UpdateRoleDto {
  @IsEnum(UserRole)
  role: UserRole;
}
