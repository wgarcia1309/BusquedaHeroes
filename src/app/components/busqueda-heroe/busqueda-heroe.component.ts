import { Component, OnInit } from '@angular/core';
import { Hero, HeroService } from 'src/app/service/hero.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busqueda-heroe',
  templateUrl: './busqueda-heroe.component.html',
  styleUrls: ['./busqueda-heroe.component.css']
})
export class BusquedaHeroeComponent implements OnInit {
  heroes: Hero[];
  constructor(
    private heroservice : HeroService,
    private route : ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.heroes=this.heroservice.buscarHeroe(this.route.snapshot.paramMap.get('palabra') );
    console.log(this.heroes);
  }

}
