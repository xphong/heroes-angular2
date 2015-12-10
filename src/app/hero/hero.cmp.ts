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
  service: HeroService;
  selectedHero: HeroModel;
  heroes: HeroModel[];
  
  constructor(service: HeroService) {
    this.title = 'Tour of Heroes';
    this.service = service;
    this.heroes = service.getHeroes();
  }
  
  onSelect(hero: HeroModel) {
    this.selectedHero = hero;
  }
  
  addHero(newHero) {
    this.service.addHero({id: this.heroes.length+1, name: newHero.value});
    newHero.value = '';
  }
  
  enterAddHero($event, newHero) {
    if ($event.which === 13) {
      this.service.addHero({id: this.heroes.length+1, name: newHero.value});
      newHero.value = '';
    }
  }
}
