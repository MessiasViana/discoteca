import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { environment } from "src/environments/environment.development";
import { Music } from "../models/music.model";

@Injectable({
  providedIn: 'root'
})

export class MusicaService {
  private _httpClient: HttpClient;
  private url = environment

  constructor(httpClient: HttpClient) {
    this._httpClient = httpClient;
  }

  obterMusicas() {
    return this._httpClient.get<Music[]>(`${this.url.api}/musicas/lists`);
  }

  cadastrarMusica(musica: Music) {
    return this._httpClient.post<Music>(`${this.url.api}/musicas/lists`, musica);
  }

  remover(titulo: string) {
    return this._httpClient.delete<void>(`${this.url.api}/musicas/lists/${titulo}`);
  }
}
