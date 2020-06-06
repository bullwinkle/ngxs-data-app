import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CountState } from './app.state';

@Component({
  selector: 'my-app',
  template: `
    <h1>Count is {{counter.state$ | async}}</h1>
    <button (click)="counter.increment()">Click Me</button>
  `
})
export class AppComponent  {
  constructor(public counter: CountState) {}
}