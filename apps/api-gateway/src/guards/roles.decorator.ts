import { SetMetadata } from '@nestjs/common';
import { UserRole } from '@app/database/entities/user.entity';

export const Roles = (...roles: UserRole[]) => SetMetadata('roles', roles);
