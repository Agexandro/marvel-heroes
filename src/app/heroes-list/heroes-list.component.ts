import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';
import { Heroe } from '../Models/heroe';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {
  heroes?:Heroe[];  

  constructor(private heroService:HeroesService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes():void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes.data.results);
  }

}
