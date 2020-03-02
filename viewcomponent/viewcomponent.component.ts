import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appmodel';
import { AppointmentserviceService } from '../appointmentservice.service';

@Component({
  selector: 'app-viewcomponent',
  templateUrl: './viewcomponent.component.html',
  styleUrls: ['./viewcomponent.component.css']
})
export class ViewcomponentComponent implements OnInit {


  viewAppoint : Appointment[];

  constructor(private appointmentService : AppointmentserviceService) { 

    
  }

  ngOnInit(): void {
    this.appointmentService.getview().subscribe(view => {this.viewAppoint = view; console.log("received..."+view[0].id);});
    
  }



}
