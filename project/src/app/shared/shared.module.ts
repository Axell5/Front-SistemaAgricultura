import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { NotificationComponent } from './components/notification/notification.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const components = [
  ButtonComponent,
  CardComponent,
  NotificationComponent,
  LoadingSpinnerComponent,
  PageNotFoundComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ...components,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }