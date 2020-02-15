import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { StorageKey } from '../../const/storage-key.const';
import { StorageType } from '../../enum/storage-type.enum';
import { Attraction } from '../../model/attraction/attraction';
import { StorageService } from '../../service/storage/storage.service';

@Component({
  selector: 'app-attraction-detail',
  templateUrl: './attraction-detail.component.html',
  styleUrls: ['./attraction-detail.component.scss']
})
export class AttractionDetailComponent implements OnInit {

  attraction: Attraction = new Attraction({});

  slideConfig = {
    slidesToShow: 2,
    slidesToScroll: 2
  };

  constructor(
    private activeRouter: ActivatedRoute,
    private router: Router,
    private storageSvc: StorageService,
  ) { }

  ngOnInit(): void {

    const attractionList = this.storageSvc.getData(StorageKey.attractions, StorageType.MEMORY);

    if (!attractionList ||
      !(attractionList instanceof Map) ||
      !(attractionList.size)
    ) {
      this.router.navigateByUrl('/');
      return;
    }

    this
      .activeRouter
      .params
      .subscribe(({ id }) => {

        this.attraction = attractionList.get(id);

        if (!this.attraction) {
          this.router.navigateByUrl('/');
        }

      });


  }

}
