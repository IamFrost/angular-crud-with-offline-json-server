import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-post-one',
  templateUrl: './post-one.component.html',
  styleUrls: ['./post-one.component.css']
})
export class PostOneComponent implements OnInit {
  @Input() postDetails = { id: 0 };

  posts: any = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // this.GetPosts();
  }

  async GetOnePost()
  {
    const response = await this.dataService.Get_A_Post(this.postDetails.id);
    console.log(typeof(response));
    console.log(response);
    const dataService = await response.json();
    console.log(typeof(dataService));
    console.log(dataService);
    this.posts = dataService;
    console.log(typeof(this.posts));
    console.log(this.posts);

    // this.posts = this.dataService.Get_A_Post(this.postDetails.id);
  }

}
