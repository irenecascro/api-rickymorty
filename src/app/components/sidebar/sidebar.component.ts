import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/character.interface';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  arrCharacters: Character[];
  next: string = "";
  prev: string = "";
  constructor(
    private charactersService: CharactersService
  ) {
    this.arrCharacters = new Array();
  }

  async ngOnInit(): Promise<void> {
    const response = await this.charactersService.getByPage();
    //console.log(response);
    this.repartirDatos(response);
  }

  async prevPage() {
    if (this.prev !== null) {
      const response = await this.charactersService.getByPage(this.prev)
      this.repartirDatos(response);
    }
  }

  async nextPage() {
    if (this.next !== null) {
      const response = await this.charactersService.getByPage(this.next)
      this.repartirDatos(response);
    }
  }

  repartirDatos(pResponse: any): void {
    this.next = pResponse.info.next;
    this.prev = pResponse.info.prev;
    this.arrCharacters = pResponse.results;
  }

}
