import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  ngOnInit(){
    setTimeout(()=>{
    this.disabled = true
    this.imgUrl="https://www.braveterry.com/wp-content/uploads/2015/12/vue.js.png" 
    }, 4000);

  };
title: string = ' Form component'
textColor: string = '' 
title3: string = 'Geohub'
imgUrl: string ='https://www.comparethecloud.net/wp-content/uploads/2018/09/developer-3461405_1920-1024x683.png'

getInfo (): string{
  return 'my site'
}

//obj ={
  //name: 'MYform', info:{
   // company: 25,
   // status: 'active'
  //}
//}

disabled: boolean = false

Changetitle(){
  this.title = 'Geohub.school.ge'
}

//inputHendler(event:any){
  //const value = event.target.value 
  //this.title = value;
  
//}


      
}
