import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Usuario } from './entities/usuario.schema';

@Injectable()
export class UsuariosService {
  //Inyecto el Schema
  constructor(@InjectModel('Usuario') private UsuarioModel: Model<Usuario>){}

  async create(createUsuarioDto: CreateUsuarioDto) {
    const usuarioCreado = await this.UsuarioModel.create(createUsuarioDto);
    return usuarioCreado;
  }

  async findAll() {
    const usuarios = await this.UsuarioModel.find();
    return usuarios;
  }

  async findOne(id: number) {
    const usuarioPorID = await this.UsuarioModel.findById(id);
    return usuarioPorID;
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    const usuarioModificado = await this.UsuarioModel.updateOne({_id : id}, updateUsuarioDto);
    return usuarioModificado;
  }

  async remove(id: number) {
    const usuarioEliminado = await this.UsuarioModel.deleteOne({_id: id});
    return usuarioEliminado;
  }
}
