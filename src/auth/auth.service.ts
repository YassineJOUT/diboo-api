import { Injectable } from '@nestjs/common';
import { AdminService } from 'src/admin/admin.service';

@Injectable()
export class AuthService {
  constructor(private adminService: AdminService) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const admin = await this.adminService.findOne(email);
    if (admin && admin.password === pass) {
      const { password, ...result } = admin;
      return result;
    }
    return null;
  }
}
