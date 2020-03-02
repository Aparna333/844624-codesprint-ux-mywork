import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder ,Validators} from '@angular/forms';
import { Contact} from './Contact';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
contactForm: FormGroup;
submitted=false;
msg: string;
name:String;
email: String;
public events: any[] = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm=this.fb.group({
        name: ['', [<any>Validators.required, <any>Validators.minLength(7)]],
        email: ['', Validators.compose([Validators.required, Validators.pattern
          (/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)])],
        
    });
   /* (
      <FormControl>this.contactForm.controls['name'])
            .setValue('John', { onlySelf: true }
    );
    (
      <FormControl>this.contactForm.controls['email'])
            .setValue('John@gmail.com', { onlySelf: true }
    );*/
    }
    
    save(model: Contact, isValid: boolean) {
      this.msg="thank You For Contacting!!!!"+this.name;
        this.submitted = true;
        console.log(model, isValid);
    }
  }

