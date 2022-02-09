import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';
import { Heroe } from '../Models/heroe';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe-detail',
  templateUrl: './heroe-detail.component.html',
  styleUrls: ['./heroe-detail.component.scss']
})
export class HeroeDetailComponent implements OnInit {
  heroe?: Heroe;

  constructor(
    private heroesService: HeroesService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHeroe();
  }

  goBack():void {
    this.location.back();
  }

  getHeroe(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroesService.getHeroe(id).subscribe((heroe) => this.heroe = heroe.data.results[0]);
  }

}
