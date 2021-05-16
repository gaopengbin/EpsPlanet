import { Component, OnInit } from '@angular/core';
import { ComponentRegister } from 'epsgis';

@ComponentRegister({
  uri:"epsgis-planet-preview",
  path:"components/preview",
  name:"PreviewComponent"
})
@Component({
  selector: 'epsgis-planet-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
})
export class PreviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
