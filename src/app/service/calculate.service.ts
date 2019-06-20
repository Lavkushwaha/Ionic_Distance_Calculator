import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//import { Geolocation } from '@ionic-native/geolocation/ngx';

const httpOptions = {
  headers:
  new HttpHeaders (
  {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:8100/",
    
  }),
withCredentials: true,
};

@Injectable({
  providedIn: 'root'
})

//https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=mandla madhya pradesh&destinations=jabalpur&key=AIzaSyCqOnGO1dxEHnqFr5ox6CezEntcZfPEpNE


export class CalculateService {
  url = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=metric';
  key = 'AIzaSyCqOnGO1dxEHnqFr5ox6CezEntcZfPEpNE';

  constructor(private http: HttpClient) { }


  

 async calDistance(origin:string,destination:string){
  


    // this.geolocation.getCurrentPosition().then((resp) => {
    //   // resp.coords.latitude
    //   // resp.coords.longitude
    //   console.log('lattitude and logintudes are :',resp.coords.latitude,resp.coords.longitude);

    //  }).catch((error) => {
    //    console.log('Error getting location', error);
    //  });
  
  
    

     await this.http.get(`${this.url}&origins=${origin}&destinations=${destination}&key=${this.key}`, httpOptions).subscribe(res =>{
      console.log(res)
    });

    // await this.http.get('https://jsonplaceholder.typicode.com/todos/',httpOptions).subscribe(res=>{
    //   console.log(res)
    // });

  }

  
  // async getCurrentLoc(){
  //   await this.geolocation.getCurrentPosition().then((resp) => {
  //     // resp.coords.latitude
  //     // resp.coords.longitude
  //     console.log('lattitude and logintudes are :',resp.coords.latitude,resp.coords.longitude);

  //    }).catch((error) => {
  //      console.log('Error getting location', error);
  //    });
  // }

  
   
  

  
  }