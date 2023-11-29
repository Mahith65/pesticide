import { Component } from '@angular/core';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent {
  title = 'my';
  opened=false;
 
  
  search(value: string) {
    console.log(value);
  }
}
