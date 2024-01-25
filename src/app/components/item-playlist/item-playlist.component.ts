import { PlaylistService } from './../../services/playlist.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Playlist } from 'src/app/models/playlist.model';
import { MusicaService } from 'src/app/services/music.service';

@Component({
  selector: 'app-item-playlist',
  templateUrl: './item-playlist.component.html',
  styleUrls: ['./item-playlist.component.css']
})
export class ItemPlaylistComponent {
  item = new Observable<Playlist>();
  nome = "";

  constructor(private musicaService: MusicaService, private playlistService: PlaylistService, private route: ActivatedRoute) {
    this.getItem();
  }

  getItem() {
    this.nome = this.route.snapshot.params['nome'];
    this.item = this.playlistService.obterPlaylistUnica(this.nome);
  }

  remover(nome: string) {
    this.musicaService.remover(nome)
      .subscribe(_ => this.getItem());
  }
}
