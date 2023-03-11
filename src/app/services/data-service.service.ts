import { Injectable } from '@angular/core';
import { AddressData } from '../model/address-data.model';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }
  title='DataService';
  data : AddressData [] = [
    {address_line:"9-92 z p h school street",pincode:533006,district:"east godavari",state:"andhra pradesh",device_id:1,time:"2022-12-22T09:10:50.000Z",status:"under_control",city:"kakinada",report: null},
    {address_line:"64-12-15/1 raghavendra street",pincode:533004,district:"kakinada",state:"andhra pradesh",device_id:2,time:"2022-12-22T09:27:06.000Z",status:"under_control",city:"kakinada",report: null},
    {address_line:"kokila center",pincode:533005,district:"kakinada",state:"andhra pradesh",device_id:3,time:"2022-12-22T09:29:07.000Z",status:"under_control",city:"kakinada",report: null},
    {address_line:"police academy",pincode:533009,district:"east godavari",state:"andhra pradesh",device_id:4,time:"2022-12-22T09:30:14.000Z",status:"under_control",city:"yanam",report: null},
    {address_line:"65-12-15/1",pincode:177668,district:"east godavari",state:"andhra pradesh",device_id:31,time:"2023-02-01T13:38:24.000Z",status:"fire",city:"kakinada",report: null},
    {address_line:"90-189",pincode:533001,district:"kakinada",state:"andhra pradesh",device_id:160,time:"2023-01-19T10:06:17.000Z",status:"fire",city:"kakinada",report: null},
    {address_line:"16-32/1 dowlaiswaram",pincode:533125,district:"east godavari",state:"andhra pradesh",device_id:410,time:"2022-12-23T05:21:22.000Z",status:"under_control",city:"rajhmundry",report: null},
    {address_line:"raithu market",pincode:533001,district:"east godavari",state:"andhra pradesh",device_id:927,time:"2022-12-22T12:48:28.000Z",status:"under_control",city:"kakinada",report: null}
  ];
  getData(){
    return this.data;
  }

}
