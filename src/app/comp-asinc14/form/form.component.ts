import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  
  public form!:FormGroup;
  mensaje:any[]=[]; 

  enviar(){
    this.mensaje=[this.form.value,this.form.valid]
  }
  constructor(private fb:FormBuilder) { }
  
  ngOnInit(): void {
  this.form=this.fb.group({
    name:['',
    [Validators.required,
    Validators.pattern('[a-zA-ZÀ-ÿ]+')]
  ],
    dni:[0,
    [Validators.required,
    Validators.minLength(8)]],
    estado:'soltero'
  }
  )

  }

}
