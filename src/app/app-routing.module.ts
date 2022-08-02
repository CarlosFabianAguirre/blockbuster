import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PublicatumusicaComponent } from './pages/publicatumusica/publicatumusica.component';
import { ToptemComponent } from './pages/toptem/toptem.component';

const routes: Routes = [
  {path:"inicio",component:InicioComponent},
  {path:"buscar",component:BuscarComponent},
  {path:"toptem",component:ToptemComponent},
  {path:"publicatumusica",component:PublicatumusicaComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
