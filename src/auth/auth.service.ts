import { Injectable } from '@nestjs/common';
import { AdminService } from 'src/admin/admin.service';
import { AdminType } from 'src/admin/type/admin.type';

@Injectable()
export class AuthService {
  constructor(private readonly admin: AdminService) {}

  async validate({ id }): Promise<AdminType> {
    const user = await this.admin.findOneById(id);
    if (!user) {
      throw Error('Authenticate validation error');
    }
    return user;
  }
}