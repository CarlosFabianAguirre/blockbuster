
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgImageSliderModule} from 'ng-image-slider';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ToptemComponent } from './pages/toptem/toptem.component';
import { PublicatumusicaComponent } from './pages/publicatumusica/publicatumusica.component';
import { SliderComponent } from './components/slider/slider.component';
import { ToptemhijoComponent } from './components/toptemhijo/toptemhijo.component';
import { ToptemhijitoComponent } from './components/toptemhijito/toptemhijito.component';
import { MoviesComponent } from './components/movies/movies.component';
import { CardMovieComponent } from './components/card-movie/card-movie.component';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    InicioComponent,
    BuscarComponent,
    ToptemComponent,
    PublicatumusicaComponent,
    SliderComponent,
    ToptemhijoComponent,
    ToptemhijitoComponent,
    MoviesComponent,
    CardMovieComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgImageSliderModule,
    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
