import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  name: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }
  setName(value: string) {
    this.name = value;
  }

}
