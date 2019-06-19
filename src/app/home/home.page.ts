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
    await this.calculateService.calDistance('jabalpur',location)
   .subscribe(res =>{
     console.log(res)
   });
  
  }
  

}
