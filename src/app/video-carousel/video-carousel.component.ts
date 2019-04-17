import {Component, OnInit, ViewChild} from '@angular/core';
import {VideoService} from '../video.service';
import {Video} from '../model/video';

@Component({
  selector: 'app-video-carousel',
  templateUrl: './video-carousel.component.html',
  styleUrls: ['./video-carousel.component.css'],
  providers: [VideoService]
})

export class VideoCarouselComponent implements OnInit {
  videos: Video[];
  videoService: VideoService;
  carouselOptions = {items: 3,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    navText: ['<div class=\'nav-btn prev-slide\'><button>Prev</button></div>', '<div class=\'nav-btn next-slide\'><button>Next</button></div>'],
  };

  constructor(videoService: VideoService) {
    this.videoService = videoService;
  }

  ngOnInit() {
    this.videoService.getVideos().subscribe(data => {
        this.videos = data.map(item => {
          const video = new Video(item.title, item.images[0].url, item.contents[0].url);
          return video;
        });
      },
      err => {
        console.log('Error in retrieving data', err);
      });
  }
}
