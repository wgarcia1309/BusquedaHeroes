import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/service/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private _router: Router) {}

  ngOnInit(): void {
  }
  buscarHeroe(palabra:string){
    this._router.navigateByUrl('/',{skipLocationChange:true}).then(()=>
      this._router.navigate(['/buscar', palabra] )
    );
  }

}
