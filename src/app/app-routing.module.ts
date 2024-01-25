import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MusicsComponent } from './components/musics/musics.component';
import { ItemPlaylistComponent } from './components/item-playlist/item-playlist.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/playlist",
    pathMatch: 'full'
  },
  {
    path: "playlist",
    component: HomeComponent
  },
  {
    path: "playlist/:nome",
    component: ItemPlaylistComponent
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
