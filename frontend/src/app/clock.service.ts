import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Clock } from "./Clock"
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClockService {

  clock = [];

  url = "https://propane-ground-259615.appspot.com/api/v1/clock/";
  jsonHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  constructor(private http: HttpClient) { 
    let x = {
      Name: "Przykladowy zegar",
      Description: "Polecany przez producenta",
      Colour: "Rozowy",
      Manufacturer: "ZELMER",
      Weight: 0,
      Link: "https://storage.cloud.google.com/clock-lab2/clock2.jfif?authuser=1"
    };
    this.clock.push(x);
  }




  public addOneClock(clock:Clock){
    console.log(JSON.stringify (clock))
    return this.http.post(this.url, 
    JSON.stringify (clock),
    {
      headers: this.jsonHeaders,
      responseType: "text"
    }
    )
  }

  public GetAllClocks() {
    return this.http.get<Clock[]>(this.url);
  }

}
