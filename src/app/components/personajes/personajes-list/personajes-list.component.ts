import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personajes } from 'src/app/models/personajes';
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
  selector: 'app-personajes-list',
  templateUrl: './personajes-list.component.html',
  styleUrls: ['./personajes-list.component.scss'],
})
export class PersonajesListComponent implements OnInit {
  constructor(public personajeService: PersonajesService, private route: ActivatedRoute,
    private router: Router) {}

  personajes: Personajes[] = [];


  ngOnInit(): void {
    this.personajeService.getAll().subscribe((response) => {
      this.personajes = response.results;
      console.log('Personajes ', this.personajes);
    });
  }



  onDetail(id: number){

    this.router.navigate(['people', id]).catch(e => console.error(e));
  }



}
