import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormTeamComponent } from '../components/form-team/form-team.component';
import { TeamsComponent } from '../components/teams/teams.component';
import { MyTeamsComponent } from '../components/my-teams/my-teams.component';

const routes: Routes = [
    { path: 'addteam', component: FormTeamComponent },
    { path: 'showteams', component: TeamsComponent },
    { path: 'myteams', component: MyTeamsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
