import { Component, Input, OnInit } from '@angular/core';
import { Episode } from 'src/app/interfaces/episode.interface';
import { EpisodesService } from 'src/app/services/episodes.service';
import { LocationsService } from 'src/app/services/locations.service';
import { Location } from 'src/app/interfaces/location.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input('objeto') objeto: any;
  @Input('tipo') tipo: string = "";
  episode: Episode | undefined;
  location: Location | undefined

  constructor(
    private episodesService: EpisodesService,
    private locationsService: LocationsService
  ) { }

  async ngOnInit(): Promise<void> {
    switch (this.tipo) {
      case 'episode':
        this.episode = await this.episodesService.getByUrl(this.objeto);
        break;

      case 'location':
        this.location = await this.locationsService.getByUrl(this.objeto.url)
        break;
    }

  }

}
