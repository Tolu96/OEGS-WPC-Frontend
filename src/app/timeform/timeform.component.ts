import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TimetableComponent } from '../timetable/timetable.component';

@Component({
  selector: 'app-timeform',
  templateUrl: './timeform.component.html',
  styleUrls: ['./timeform.component.scss']
})
export class TimeformComponent {
 
  constructor(private builder:FormBuilder, private dialog:MatDialog){

  }
  usertimeform=this.builder.group({
    date:this.builder.control(new Date(),Validators.required),
    starttime:this.builder.control('',Validators.required),
    endtime:this.builder.control('',Validators.required),
    workside:this.builder.control('',Validators.required),
    description:this.builder.control('')
  })

  submit(){  
  }

  clear(){
    this.usertimeform.reset();
  }

  Opentable(){
    this.dialog.open(TimetableComponent,{
      width: '60%',
      height: '800px'
    })
  }
}
