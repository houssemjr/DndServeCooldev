import { Component, OnInit } from '@angular/core';
import { DishService } from '../dish.service';
import { OrderService } from '../order.service';
import { TableService } from '../table.service';

@Component({
  selector: 'app-dish-front',
  templateUrl: './dish-front.component.html',
  styleUrls: ['./dish-front.component.css']
})
export class DishFrontComponent implements OnInit {

 


  
  title = 'DishDashboard';
  id:any;
  Dish:any;
  dishDetails:any;
  dishToUpdate:any;
  NbCalorieParPlat:any;
  idTable:any;
  idDish:any;
  Order:any;
  tables:any;

  
  constructor(private dishService: DishService,private orderService:OrderService,private tableService:TableService) {
    
    this.getDishDetails();
    
  }
  
  ngOnInit(): void {
    this.tableService.getAlLTabDispo().subscribe(data => {
      this.tables = data;
    });
    this.Dish = {
      idDish: null,
      nameDish: null,
      typeDish: null,
      description:null,
      price:null
     }
     this.Order = {

      dateOrder: null,
      nbPlace: null,
      status:null

     }
        
   this.dishToUpdate = {
      idO:null,
      name:null,
      type:null,
      description:null,
      price:null
    }
  }


  getDishDetails() {
    this.dishService.getAllDish().subscribe(
      (resp) => {
        console.log(resp);
        this.dishDetails = resp;
        // Add NbCalorieParPlat to each dish object
   
        
      },
      (err) => {
        console.log(err);
      }
    );
  }
  addOrder(){
 
    this.orderService.createEmployee(this.Order,this.idTable,this.idDish).subscribe(
      (resp) => {
        console.log(resp);
        
       
        // Add NbCalorieParPlat to each dish object
   
        
      },
      (err) => {
        console.log(err);
      }
    );
    
  }
  RecupereDish(id:number){
    
    this.idDish=id;
    
  }
 

 


}
