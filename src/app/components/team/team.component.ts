import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent implements OnInit {
  teams: any[] = [];

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    this.teamService.getTeams().subscribe((data: any[]) => {
      this.teams = data;
    });
  }
}
