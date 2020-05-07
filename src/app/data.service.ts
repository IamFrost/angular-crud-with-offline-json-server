import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpCLient: HttpClient) { }

  GetPosts() {
    // return(this.httpCLient.get('http://localhost:3000/Posts'));

    return fetch(('http://localhost:3000/Posts'));
  }

  Get_A_Post(id: number) {
    // return await fetch('http://localhost:3000/Posts/' + id)
    // .then(response => response.json())
    // .then(json => console.log(json));

    return fetch('http://localhost:3000/Posts/' + id);

    // const data = await fetch('https://jsonplaceholder.typicode.com/todos/' + id)
    //             .then(response => response.json())
    //             .then(json => console.log(json));
  }

  Delete_A_Post(id: number) {
    return fetch('http://localhost:3000/Posts/' + id, {
      method: 'DELETE'
    });
  }

  Create_A_Post(titleInput: string, bodyInput: string, userIdInput: number)
  {
    return fetch('http://localhost:3000/Posts', {
      method: 'POST',
      body: JSON.stringify({
        title: titleInput,
        body: bodyInput,
        userId: userIdInput
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    });
    // .then(response => response.json())
    // .then(json => console.log(json));
  }
    Update_A_Post(titleInput: string, bodyInput: string, idInput: number) {
    return fetch('http://localhost:3000/Posts/' + idInput, {
      method: 'PATCH',
      body: JSON.stringify({
        title: titleInput,
        body: bodyInput
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    });
    }


}
