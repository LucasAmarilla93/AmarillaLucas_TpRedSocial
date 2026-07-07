import { Route, Routes } from "@angular/router";

export const authRoutes: Routes = [
    {path: 'login', loadComponent: () => import('../pages/login/login').then((login) => login.Login)},
    {path: 'registro', loadComponent: () => import('../pages/registro/registro').then((registro) => registro.Registro)},
    {path: 'miperfil', loadComponent: () => import('../pages/miperfil/miperfil').then((miperfil) => miperfil.Miperfil)},
    {path: 'publicaciones', loadComponent: () => import('../pages/publicaciones/publicaciones').then((publicaciones) => publicaciones.Publicaciones)},
]
