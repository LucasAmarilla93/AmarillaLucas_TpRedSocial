import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { DateToString } from "mongoose";

@Schema()
export class Usuario {
    @Prop({required: true})
    nombre: string;

    @Prop({required: true})
    apellido: string;

    @Prop({required: true})
    correo: string
    
    @Prop({required: true})
    nombreUsuario: string
    
    @Prop({required: true})
    password: string
    
    @Prop({required: true})
    fechaNacimiento: string;
    
    @Prop({required: true})
    descripcion: string
    
    @Prop({required: true})
    linkImagen: string
}


export const UsuarioSchema = SchemaFactory.createForClass(Usuario);