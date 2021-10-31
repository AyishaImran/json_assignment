import { ShoppingService } from '../shopping.service';
import { Component, OnInit } from '@angular/core';
import { IShopping } from '../shopping';



@Component({
  selector: 'shopping-detail',
  templateUrl: './shopping-detail.component.html',
  styleUrls: ['./shopping-detail.component.css']
})
export class ShoppingDetailComponent implements OnInit {

  public lists = [];
  public errorMsg;
  filteredString: string = '';

  
  increase_quantity(temp_total){

    if(temp_total.p_availability == 5){
      return alert("Can't add more")
    }else{
      temp_total.p_availability++
    }
}


decrease_quantity(temp_total){
    if(temp_total.p_availability == 0){
      return alert("can't be in minus")
    }
    temp_total.p_availability--
}
  
  constructor(private _shoppingService:ShoppingService) { }

  ngOnInit() {


    this._shoppingService.getLists()
      .subscribe(data => this.lists = data,
                 error => this.errorMsg = error);
        
  }

}
