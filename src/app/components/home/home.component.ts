import { PlaylistService } from './../../services/playlist.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Playlist } from 'src/app/models/playlist.model';
import { SharedDataService } from './../../services/shared-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  playlists = new Observable<Playlist[]>();

  nome = "";
  descricao = "";

  constructor(private playlistService: PlaylistService, private sharedDataService: SharedDataService) {
    this.obterPlaylistsCadastradas();
  }

  obterPlaylistsCadastradas() {
    this.playlists = this.playlistService.obterPlaylist();
    this.playlists.subscribe(playlists => this.sharedDataService.changePlaylists(playlists));
  }

  cadastarPlaylist() {
    if (!this.nome || !this.descricao) return;

    this.playlistService.cadastrarPlaylist({ nome: this.nome, descricao: this.descricao, musicas: [] })
      .subscribe(_ => this.obterPlaylistsCadastradas());
  }

  remover(nome: string) {
    this.playlistService.remover(nome)
      .subscribe(_ => this.obterPlaylistsCadastradas());
  }
}
