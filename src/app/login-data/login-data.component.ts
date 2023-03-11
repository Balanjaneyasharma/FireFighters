import { DataServiceService } from '../services/data-service.service';
import { AddressData } from './../model/address-data.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login-data',
  templateUrl: './login-data.component.html',
  styleUrls: ['./login-data.component.css']
})
export class LoginDataComponent{
  userData :  AddressData []=[];
  constructor(private ds:DataServiceService){
    console.log(ds.title);
  }
  ngOnInit(){
    this.userData = this.ds.getData();
  }

  
}
