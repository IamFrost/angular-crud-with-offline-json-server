import { Component, Input } from '@angular/core';
import { DataService } from './data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // @Input() postDetails = { id: 0 };
  title = 'restTest2';
  constructor(
    public dataService: DataService,
    public router: Router
  ) { }

  // getOnePost()
  // {
  //   console.log(this.postDetails.id);
  //   this.dataService.Get_A_Post(this.postDetails.id).then(value => console.log(value));
  //   this.router.navigate(['posts/']);
  // }
}
