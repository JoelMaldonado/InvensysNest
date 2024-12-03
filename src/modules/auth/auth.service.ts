import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { UsuarioService } from '../usuario/usuario.service';
import { encriptar } from 'src/utils/encrypt.util';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private readonly usuarioService: UsuarioService,
  ) {}

  async create(dto: LoginDto) {
    const claveEcnriptada = encriptar(dto.pass);

    const user = await this.usuarioService.findByCodusu(dto.user);

    if (!user) throw new UnauthorizedException('Usuario no encontrado');

    if (user.clave?.trim() != claveEcnriptada) {
      throw new UnauthorizedException('Contraseña incorrecta');
    }

    const payload = { sub: user.id, email: user.codusu };
    const access_token = this.jwtService.sign(payload);
    return { access_token };
  }
}
