import { Component, OnInit,  } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { StorageKey } from '../../const/storage-key.const';
import { StorageType } from '../../enum/storage-type.enum';
import { Attraction } from '../../model/attraction/attraction';
import { LoadingService } from '../../service/loading/loading.service';
import { StorageService } from '../../service/storage/storage.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-attraction-list',
  templateUrl: './attraction-list.component.html',
  styleUrls: ['./attraction-list.component.scss'],
})
export class AttractionListComponent implements OnInit {

  attractions: Map<string, Attraction> = null;

  constructor(
    private http: HttpClient,
    private loadingSvc: LoadingService,
    private route: Router,
    private storageSvc: StorageService
  ) { }

  private getAttractions(index: number): Observable<any> {

    return this
            .http
            .get(
              `/open-api/zh-tw/Attractions/All?page=${index}`,
              {
                headers: new HttpHeaders({
                  accept: 'application/json'
                })
              }
            );

  }

  private async initAttractions(): Promise<any> {

    let index = 1;
    let isGetNext = true;
    const attractions: Map<string, Attraction> = new Map();
    do {

      const result = await this.getAttractions(index).toPromise();
      if (result &&
        Array.isArray(result.data) &&
        result.data.length) {

        // store Data
        result.data.forEach((element: any) => {
          const attraction = new Attraction(element);
          attractions.set(String(attraction.id), attraction);
        });
        index++;

      } else {
        this.storageSvc.store(
          StorageKey.attractions,
          attractions,
          StorageType.MEMORY
        );
        this.attractions = attractions;
        isGetNext = false;
      }

    } while (isGetNext);

  }

  ngOnInit(): void {

    const attractions = this.storageSvc.getData(StorageKey.attractions, StorageType.MEMORY);
    if (attractions && attractions instanceof Map && attractions.size) {
      this.attractions = attractions;
    } else {

      this.loadingSvc.show();

      this
        .initAttractions()
        .then(
          () => {
            this.loadingSvc.hide();
          }
        );

    }

    // this.attractions = this.storageSvc.getData(
    //   StorageKey.attractions,
    //   StorageType.MEMORY
    // );
    // console.log(this.attractions);
  }

  clickCard(attraction: Attraction): void {
    this.route.navigateByUrl(String(attraction.id));
  }



}
