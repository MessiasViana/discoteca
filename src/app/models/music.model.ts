export interface Music {
  id?: number;
  titulo: string;
  artista: string;
  ano: string;
  genero: string;
  album: string;
  playlist: {
    nome: string;
    id?: number;
  };
}
