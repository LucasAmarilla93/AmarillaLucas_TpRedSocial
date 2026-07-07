import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDto } from './create-usuario.dto';
import { IsString, IsOptional, IsEmail, IsStrongPassword, IsDateString,IsUrl } from 'class-validator';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {
        @IsString()
        @IsOptional()
        nombre: string;
    
        @IsString()
        @IsOptional()
        apellido: string;
    
        @IsString()
        @IsOptional()
        @IsEmail()
        correo: string;
    
        @IsString()
        @IsOptional()
        nombreUsuario: string;
    
        @IsStrongPassword()
        password: string;
        
        @IsDateString()
        fechaNacimiento: string;
        
        @IsString()
        @IsOptional()
        descripcion: string;
    
    
        @IsUrl()
        @IsOptional()
        linkImagen: string;
    
}
