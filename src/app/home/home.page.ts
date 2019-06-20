import { Component } from '@angular/core';

import { CalculateService } from '../service/calculate.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private calculateService : CalculateService) {
    

  }


  ngOnint(){
    
  }

  async changeDistance(location){
    var results = await this.calculateService.calDistance('jabalpur',location)
    results.subscribe(res=>{
      console.log(res['rows']['0']['elements']['0']['distance']['text'])
    }); 
  }
  

  async changeLocation(){
    await this.calculateService.getCurrentLoc();
  }

}
