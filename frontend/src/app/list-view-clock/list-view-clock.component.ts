import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClockService } from '../clock.service';
import { Clock } from '../Clock';

@Component({
  selector: 'app-list-view-clock',
  templateUrl: './list-view-clock.component.html',
  styleUrls: ['./list-view-clock.component.scss']
})
export class ListViewClockComponent implements OnInit {

  clock: Clock[];

  constructor(private router: Router, private cs: ClockService) { }

  ngOnInit() {
    this.cs.GetAllClocks().subscribe(data => {
      this.clock = data;
    })
  }

}
