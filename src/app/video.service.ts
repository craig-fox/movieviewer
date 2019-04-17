import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Video} from './model/video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  videosUrl = 'http://localhost:3000/server/videos';
  constructor(private http: HttpClient) { }

  getVideos(): Observable<any[]> {
    return this.http.get<any[]>(this.videosUrl);
  }
}
