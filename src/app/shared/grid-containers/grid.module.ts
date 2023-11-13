import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GridFormInputComponent } from './grid-formgroup';
import { GridAutoColComponent } from './grid-autocol';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCardModule } from '@angular/material/card';
import { GridMainComponent } from './grid-main';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    FontAwesomeModule,
    CommonModule,
    FormsModule,
    MatCardModule,
    NgbModule
  ],
  exports: [
    GridFormInputComponent,
    GridAutoColComponent,
    GridMainComponent
  ],
  declarations: [
    GridFormInputComponent,
    GridAutoColComponent,
    GridMainComponent
  ]
})
export class GridModule { }
