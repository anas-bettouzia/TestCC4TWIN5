import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-team',
  templateUrl: './form-team.component.html',
  styleUrls: ['./form-team.component.css']
})
export class FormTeamComponent {
  teamForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    console.log('FormTeamComponent chargé');
    this.teamForm = this.fb.group({
      teamName: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')]], 
      participants: this.fb.array([]),
      projectDescription: ['', [Validators.minLength(5)]], 
    });
  }

  get participants(): FormArray {
    return this.teamForm.get('participants') as FormArray;
  }

  addParticipant() {
    const participantGroup = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')]], 
      email: ['', [Validators.required, Validators.email]]
    });
    this.participants.push(participantGroup);
  }

  onSubmit() {
    if (this.teamForm.valid) {
      const newTeam = this.teamForm.value;

      this.http.post('http://localhost:3000/teams', newTeam).subscribe(
        (response) => {
          console.log('Équipe ajoutée avec succès :', response);
          alert('Équipe ajoutée avec succès !');
          this.teamForm.reset();
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de l\'équipe :', error);
        }
      );
    } else {
      alert('Veuillez remplir tous les champs obligatoires et respecter les contraintes.');
    }
  }
}
