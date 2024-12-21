import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParticipantsRoutingModule } from './participants-routing.module';
import { ParticipantsComponent } from '../components/participants/participants.component';


@NgModule({
  declarations: [ParticipantsComponent],
  imports: [
    CommonModule,
    ParticipantsRoutingModule
  ]
})
export class ParticipantsModule { }
