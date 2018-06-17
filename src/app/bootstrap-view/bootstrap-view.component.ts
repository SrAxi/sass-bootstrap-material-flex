import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap-view',
  templateUrl: './bootstrap-view.component.html',
  styleUrls: ['./bootstrap-view.component.scss']
})
export class BootstrapViewComponent implements OnInit {
  model = {
    left: true,
    middle: false,
    right: false
  };
  constructor() { }

  ngOnInit() {
  }

}
