import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  results:any = [];
  searchName:String = '';
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    let targetUrl = 'https://api.github.com/repositories';
    this.http.get(targetUrl).subscribe(response =>{
      this.results = response;
    });
    
    
  }

}
