import { Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class Publicaciones{
    @Prop({required: true})
    titulo: string;

    @Prop({required: true})
    descripcion: string;

    @Prop()
    urlImagen: string;



}