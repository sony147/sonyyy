import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  emps:any;
  constructor(public service:DataService) { 

    this.getData();
  }


  getData(){

    this.service.getData().subscribe((res)=>{
      console.log(res);
      this.emps=res;
    })
  }

  delete(no){
    //alert(no);
    this.service.delete(no).subscribe((res)=>{
      this.getData();
    })
  }

  ngOnInit() {
  }

}
