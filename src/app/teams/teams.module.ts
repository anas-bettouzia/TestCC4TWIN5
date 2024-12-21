import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamComponent } from '../components/team/team.component';
import { TeamsComponent } from '../components/teams/teams.component';
import { FormTeamComponent } from '../components/form-team/form-team.component';
import { MyTeamsComponent } from '../components/my-teams/my-teams.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [TeamsComponent,TeamComponent,FormTeamComponent,MyTeamsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TeamsRoutingModule,

  ]
})
export class TeamsModule { }
