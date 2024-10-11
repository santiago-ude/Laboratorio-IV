import { CommonModule } from '@angular/common';
import { compileOpaqueAsyncClassMetadata } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})



export class GamesComponent {

  @Input() username = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();


  games = [

    {
      id: 1,
      name: 'Uncharted 4'
    },
    {
      id: 2,
      name: 'FIFA 14'
    },
    {
      id: 3,
      name: 'PES 2004'
    },
    {
      id: 4,
      name: 'FAR CRY 5'
    }
  ];

  favGames = [];

  fav(gameName: string){

    this.addFavoriteEvent.emit(gameName);

  }


}
