import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Playlist } from 'src/app/models/playlist.model';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private playlistsSource = new BehaviorSubject<Playlist[]>([]);
  currentPlaylists = this.playlistsSource.asObservable();

  changePlaylists(playlists: Playlist[]): void {
    this.playlistsSource.next(playlists);
  }
}
