import './style.scss';
import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { AppService } from './app/app.service';
import * as bootstrap from 'bootstrap'

bootstrapApplication(AppComponent, {
  providers: [AppService],
});
