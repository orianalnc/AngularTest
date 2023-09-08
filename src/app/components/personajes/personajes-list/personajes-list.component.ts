import { Component, OnInit } from '@angular/core';
import { Personajes } from 'src/app/models/personajes';
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
  selector: 'app-personajes-list',
  templateUrl: './personajes-list.component.html',
  styleUrls: ['./personajes-list.component.scss'],
})
export class PersonajesListComponent implements OnInit {
  constructor(public personajeService: PersonajesService) {}

  personajes: Personajes[] = [];

  ngOnInit(): void {
    this.personajeService.getAll().subscribe((response) => {
      //console.log(response.results)
      this.personajes = response.results;
      console.log('Personajes ', this.personajes);
    });
  }



}
