import { Component, OnInit, Input } from '@angular/core';
import { ITweet } from '../../interfaces/ITweet';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {

  @Input() tweet: ITweet;

  constructor() { }

  ngOnInit() {
  }

}
