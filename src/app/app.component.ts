import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Consumption'; 
  data:any;
  displayedColumns: string[] = ['position', 'name'];
  constructor(private http: HttpClient) {
  }

  getReport(consumption) {
    this.http.get<any>("http://localhost:59375/api/consumption/"+consumption).subscribe(res => {
      this.data= res;
    });
  }
}



