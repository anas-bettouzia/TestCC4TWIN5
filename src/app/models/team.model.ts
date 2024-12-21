import { Participant } from "./participant.model";

export class Team {
    id!: number;
    name!: string;
    projectName!: string;
    level!: string;
    projectDescription!: string;
    participants!: Participant[];
  }