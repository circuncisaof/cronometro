import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ButtonComponentsComponent } from './components/button_components/button-components/button-components.component';
import { DisplayCronometroComponent } from './components/display-cronometro/display-cronometro.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    DisplayCronometroComponent,
    ButtonComponentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule, MatTooltipModule, MatIconModule,MatCardModule,MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
