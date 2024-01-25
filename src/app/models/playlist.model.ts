import { Music } from "./music.model";

export interface Playlist {
  id?: number;
  nome: string;
  descricao: string;
  musicas: Music[];
}
