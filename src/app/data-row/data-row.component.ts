import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { AddressData } from '../model/address-data.model';

@Component({
  selector: 'app-data-row',
  templateUrl: './data-row.component.html',
  styleUrls: ['./data-row.component.css']
})
export class DataRowComponent {
  @Input('data') d !: AddressData;
  requireAction !:boolean;
  ngOnInit(){
    this.requireAction = this.d.status === 'fire' ? true : false; 
  }
  
  getData(data:AddressData){
    console.log(data);
  }

}
