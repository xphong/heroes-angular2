import {Component, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';

import {HeroModel} from './hero.model';
import {HeroService} from './hero.service';

@Component({
  selector: 'hero',
  templateUrl: 'app/hero/hero.html',
  styleUrls: ['app/hero/hero.css'],
  providers: [HeroService],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})

export class HeroCmp {
  title: string;
  selectedHero: HeroModel;
  heroes: HeroModel[];
  
  constructor(heroService: HeroService) {
    this.title = 'Tour of Heroes';
    this.heroes = heroService.getHeroes();
  }
  
  onSelect(hero: HeroModel) {
    this.selectedHero = hero;
  }
}
