import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tempCel: number = 0;
  tempFah: number = 0;

  onTempFahrenheitChange(value : string){
    this.tempFah = parseFloat(value);
  }
  onTempCelsiusChange(value : string){
    this.tempCel = parseFloat(value);
  }
}
