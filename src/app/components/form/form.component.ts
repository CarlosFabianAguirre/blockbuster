
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
contactForm!: FormGroup

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.initForm();
    // this.onPathValue();
    // this.onSetValue();
  }

  //onPathValue(): void {
 //   this.contactForm.patchValue({ name: 'Bezael' });
  //}

  //onSetValue(): void {
    // this.contactForm.setValue({ comment: 'Hola mundo' });
  //}

  onSubmit(): void {
    console.log('Form ->', this.contactForm.value);
  }

  initForm(): FormGroup {
    return this.fb.group({
          name:['' ,[Validators.required,Validators.minLength(3)]],
          enlace:['',[Validators.required,]],
          genero: [''],
          descripcion:['',[Validators.required,Validators.minLength(3),Validators.maxLength]],
          email:['',[Validators.required,Validators.minLength(5)]],
          password:['',[Validators.required,Validators.minLength(5),]],
      })

    }
}
