import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:HttpClient) {

  }

   getData(){

    return this.http.get("http://13.126.142.251:4000/employees");

   }
   AddData(emp){
     return this.http.post("http://13.126.142.251:4000/employees",emp);
   }

   delete(no){
    return this.http.delete("http://13.126.142.251:4000/employees/"+no);
   }
   getDataById(no){

    return this.http.get("http://13.126.142.251:4000/employees/"+no);

   }

   update(emp){
    
    return this.http.put("http://13.126.142.251:4000/employees/"+emp.no,emp);

   }
}
