import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { environment } from "src/environments/environment.development";
import { Playlist } from "../models/playlist.model";

@Injectable({
  providedIn: 'root'
})

export class PlaylistService {
  private _httpClient: HttpClient;
  private url = environment

  constructor(httpClient: HttpClient) {
    this._httpClient = httpClient;
  }

  obterPlaylist() {
    return this._httpClient.get<Playlist[]>(`${this.url.api}/playlist/lists`);
  }

  obterPlaylistUnica(nome: string) {
    return this._httpClient.get<Playlist>(`${this.url.api}/playlist/lists/${nome}`);
  }

  cadastrarPlaylist(playlist: Playlist) {
    return this._httpClient.post<Playlist>(`${this.url.api}/playlist/lists`, playlist);
  }

  remover(nome: string) {
    return this._httpClient.delete<void>(`${this.url.api}/playlist/lists/${nome}`);
  }
}
