import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
  // template: `
  //   <h2>Shopping List</h2>
  //   <h3>{{errorMsg}}</h3>
  //   <ul *ngFor="let employee of employees">
  //     <li>{{employee.p_name}}</li>
  //   </ul>
  // `,
  // styles: []
})
export class ShoppingListComponent implements OnInit {

  public employees = [];
  public errorMsg;
  constructor(private _employeeService: ShoppingService) { }




  ngOnInit() {





    
    this._employeeService.getLists()
      .subscribe(data => this.employees = data,
                error => this.errorMsg = error);
  }



}
