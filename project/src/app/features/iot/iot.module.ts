import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IoTDashboardComponent } from './iot-dashboard/iot-dashboard.component';
import { SensorCardComponent } from './sensor-card/sensor-card.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    IoTDashboardComponent,
    SensorCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    IoTDashboardComponent
  ]
})
export class IoTModule { }