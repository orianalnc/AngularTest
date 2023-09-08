import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personajes } from 'src/app/models/personajes';
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
  selector: 'app-personajes-details',
  templateUrl: './personajes-details.component.html',
  styleUrls: ['./personajes-details.component.scss'],
})
export class PersonajesDetailsComponent implements OnInit {
  constructor(
    public personajeService: PersonajesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  personajes!: Personajes;
  id: number = 0;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.personajeService
      .getDetail(this.id)
      .subscribe((response: Personajes) => {
        //console.log(response.results)
        this.personajes = response;
        console.log('Personaje Detail ', this.personajes);
        console.log('Personaje ', response.url);
      });

    this.route.params.subscribe((params) => {
      console.log(params);
    });
  }

  onBack() {
    this.router.navigate(['people']).catch((e) => console.error(e));
  }
}
