import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUsuarioDto } from 'src/usuarios/dto/create-usuario.dto';
import { UpdateUsuarioDto } from 'src/usuarios/dto/update-usuario.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  //Registro -> Recibir todos los datos, validarlos y crear un usuario.
  @Post('registro')
  create(@Body() createUsuarioDTO: CreateUsuarioDto) {
    return this.authService.create(createUsuarioDTO);
  }
  
  @Post('login')
  create(@Body() createUsuarioDTO: CreateUsuarioDto) {
    return this.authService.create(createUsuarioDTO);
  }

  
}
