import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-breaktimeform',
  templateUrl: './breaktimeform.component.html',
  styleUrls: ['./breaktimeform.component.scss']
})
export class BreaktimeformComponent {

  constructor(private builder:FormBuilder){

  }

  userbreaktimeform=this.builder.group({
    date:this.builder.control(new Date(),Validators.required),
    starttime:this.builder.control('',Validators.required),
    endtime:this.builder.control('',Validators.required),
  })

  submit(){
    
  }
  clear(){
    this.userbreaktimeform.reset();
  }
}
