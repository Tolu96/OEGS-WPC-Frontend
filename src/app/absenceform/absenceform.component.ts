import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AbsencetableComponent } from '../absencetable/absencetable.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-absenceform',
  templateUrl: './absenceform.component.html',
  styleUrls: ['./absenceform.component.scss']
})
export class AbsenceformComponent {

  constructor(private builder:FormBuilder, private dialog:MatDialog){ 
  }
  userabsenceform=this.builder.group({
    date:this.builder.control('',Validators.required),
    datepicker:this.builder.control(new Date(),Validators.required),
    starttime:this.builder.control('',Validators.required),
    endtime:this.builder.control('',Validators.required),
    absence:this.builder.control('',Validators.required),
    halfday:this.builder.control(false),
    description:this.builder.control(''),
  });

  submit(){
    
  }
  
  clear(){
    this.userabsenceform.reset();
  }

  Opentable(){
    this.dialog.open(AbsencetableComponent,{
      width: '60%',
      height: '800px'
    })
  }
}
