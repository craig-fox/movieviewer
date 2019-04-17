import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  play: string;
  constructor(private _Activatedroute: ActivatedRoute,
              private _router: Router) { }

  ngOnInit() {
    this.play = this._Activatedroute.snapshot.params['play'];
  }

}
