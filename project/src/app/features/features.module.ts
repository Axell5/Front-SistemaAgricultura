import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IoTModule } from './iot/iot.module';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { MessagingComponent } from './messaging/messaging.component';
import { RewardsComponent } from './rewards/rewards.component';
import { AnalyticsComponent } from './analytics/analytics.component';

@NgModule({
  declarations: [
    DashboardComponent,
    MarketplaceComponent,
    MessagingComponent,
    RewardsComponent,
    AnalyticsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    AuthModule,
    IoTModule
  ]
})
export class FeaturesModule { }