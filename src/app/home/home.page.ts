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

  changeDistance(location){
   var result = this.calculateService.calDistance('mandla',location);

   console.log(result);
  }
  

}
