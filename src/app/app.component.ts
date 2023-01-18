import { Component, AfterViewInit, ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  button: any;
  receivedData=''

constructor(private elementref: ElementRef){
}

ngAfterViewInit(){
  this.elementref.nativeElement.querySelector('app-button').addEventListener('action', (event: any) => {
    console.log(`Action created: ${event.detail}`);
    this.receivedData = event.detail
  });
}
}

