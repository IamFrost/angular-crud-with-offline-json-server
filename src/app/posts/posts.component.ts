import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {



  posts: object;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // this.dataService.GetPosts().subscribe(
    //   dataService => this.posts = dataService
    // );

    // for promises - get
    // this.dataService.GetPosts().then((response) => {
    //   response.json().then((dataService) => {this.posts = dataService; });
    // }).catch((err) => {'Error generated: ${err}'; });
    // same thing can be done using the async fn below

    this.GetPosts();
  }

  async GetPosts()
  {
    const response = await this.dataService.GetPosts();
    const dataService = await response.json();
    this.posts = dataService;
  }

}
