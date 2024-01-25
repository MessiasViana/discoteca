import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MusicsComponent } from './components/musics/musics.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "musicas",
    component: MusicsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
