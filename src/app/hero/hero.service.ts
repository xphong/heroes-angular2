import {HeroModel} from './hero.model';
import {AngularFire, FirebaseArray} from 'firebase/angularfire';

export class HeroService {
  heroes: FirebaseArray;
  
  constructor() {
    var data = new AngularFire(new Firebase('https://heroes-angular2.firebaseio.com/'));
		this.heroes = data.asArray();
  }
  
  getHeroes() {
    return this.heroes.list;
  }
  
  addHero(hero: HeroModel) {
    this.heroes.add(hero);
  }
  
  removeHero(hero: HeroModel){
		this.heroes.remove(hero);
	}
	
	updateHero(hero: HeroModel){
		this.heroes.save(hero);
	}
	
	removeAll(){
		for( var i = this.heroes.length - 1 ; i >= 0 ; i -- )
		{
			this.heroes.remove( this.heroes[i] );
		}
	}
}
