import { MusicaService } from './../../services/music.service';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Music } from 'src/app/models/music.model';
import { Playlist } from 'src/app/models/playlist.model';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-musics',
  templateUrl: './musics.component.html',
  styleUrls: ['./musics.component.css']
})
export class MusicsComponent {
  musicas = new Observable<Music[]>();
  @Input() playlists: Playlist[] = [];

  titulo = "";
  artista = "";
  ano = "";
  genero = "";
  album = "";
  nome_playlist = "";

  constructor(private musicaService: MusicaService, private sharedDataService: SharedDataService) {
    this.obterMusicasCadastradas();
  }

  obterMusicasCadastradas() {
    this.musicas = this.musicaService.obterMusicas();
    this.sharedDataService.currentPlaylists.subscribe(playlists => this.playlists = playlists);
  }

  cadastarMusica() {
    if (!this.titulo || !this.artista || !this.ano || !this.genero || !this.album || !this.nome_playlist) return;

    this.musicaService.cadastrarMusica({ titulo: this.titulo, album: this.album, artista: this.artista, ano: this.ano, genero: this.genero, playlist: {nome: this.nome_playlist }})
      .subscribe(_ => this.obterMusicasCadastradas());
  }

  remover(nome: string) {
    this.musicaService.remover(nome)
      .subscribe(_ => this.obterMusicasCadastradas());
  }
}
