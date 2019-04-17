export class Video {
  _title: string;
  _cover: string;
  _play: string;
  _lastPlayed: string;

  constructor(title: string, cover: string, play: string) {
    this._title = title;
    this._cover = cover;
    this._play = play;
  }
  get title(){
    return this._title;
  }
  set title(title: string){
    this._title = title;
  }
  get cover(){
    return this._cover;
  }
  set cover(cover: string){
    this._cover = cover;
  }
  get play(){
    return this._play;
  }
  set play(play: string){
    this._play = play;
  }
  get lastPlayed(){
    return this._lastPlayed;
  }
  set lastPlayed(lastPlayed: string){
    this._lastPlayed = lastPlayed;
  }
}
