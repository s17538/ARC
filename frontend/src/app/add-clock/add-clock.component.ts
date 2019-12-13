import { Component, OnInit } from '@angular/core';
import { ClockService } from '../clock.service';
import { ActivatedRoute } from '@angular/router';
import { Clock } from '../Clock';

@Component({
  selector: 'app-add-clock',
  templateUrl: './add-clock.component.html',
  styleUrls: ['./add-clock.component.scss']
})
export class AddClockComponent implements OnInit {

  constructor(private cs: ClockService, private router: ActivatedRoute) { }
  clock: Clock = {
    Name: "",
    Description: "",
    Colour: "",
    Manufacturer: "",
    Weight: 0,
    Link: ""
  };

  submit() {
    this.cs.addOneClock(this.clock).subscribe();

  }

  ngOnInit() {
  }

}
