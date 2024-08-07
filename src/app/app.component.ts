import { Component } from '@angular/core';
import { AppService } from './app.service';
import { MaterialModule } from './material.module';

import Button from 'bootstrap/js/dist/button';
import Alert from 'bootstrap/js/dist/alert';

import { Tooltip, Toast, Popover } from 'bootstrap';


@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [MaterialModule, Button ],
})
export class AppComponent {
  constructor(private appService: AppService) {
    console.log(appService.getHello());
  }
}
