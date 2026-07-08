import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUsuarioDto } from '../usuarios/dto/create-usuario.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  //Registro -> Recibir todos los datos, validarlos y crear un usuario.
  @Post('registro')
  create(@Body() createUsuarioDTO: CreateUsuarioDto) {
    return this.authService.create(createUsuarioDTO);
  }

  /*
  @Post('login')
  (@Body() createUsuarioDTO: CreateUsuarioDto) {
    return this.authService.create(createUsuarioDTO);
  }*/

  
}
