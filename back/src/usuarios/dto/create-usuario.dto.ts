import { IsDate, IsDateString, IsEmail, IsNotEmpty, IsOptional, IsString, IsStrongPassword, IsUrl } from "class-validator";

export class CreateUsuarioDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsNotEmpty()
    apellido: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    correo: string;

    @IsString()
    @IsNotEmpty()
    nombreUsuario: string;

    @IsStrongPassword()
    password: string;
    
    @IsDateString()
    fechaNacimiento: string;
    
    @IsString()
    @IsNotEmpty()
    descripcion: string;


    @IsOptional()
    @IsUrl()
    linkImagen: string;

}
