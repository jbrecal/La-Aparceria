import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how',
  templateUrl: './how.page.html',
  styleUrls: ['./how.page.scss'],
})
export class HowPage implements OnInit {
  
  selectedSegment: string = 'option1';

  constructor() { }

  ngOnInit() {
  }
  segmentChanged(event: any) {
    this.selectedSegment = event.detail.value;
  }

}
