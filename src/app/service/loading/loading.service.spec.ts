import { TestBed, inject } from '@angular/core/testing';
import { MatDialog } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '../../material.module';

import { LoadingService } from './loading.service';
import { LoadingComponent } from './loading.component';
import { LoadingModule } from './loading.module';

describe('LoadingService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MaterialModule,
        LoadingModule
      ]
    });
  });

  it('should be created', inject([LoadingService], (service: LoadingService) => {
    expect(service).toBeTruthy();
  }));

  it('should be show dialog', inject(
    [LoadingService, MatDialog],
    (service: LoadingService, dialog: MatDialog) => {

      expect(service.dialogRef).toBeNull();

      service.show();

      expect(service.dialogRef).toBeTruthy();

      service.show();

      expect(service.dialogRef).toBeTruthy();

    }
  ));

  it('should be hide dialog', inject(
    [LoadingService, MatDialog],
    (service: LoadingService, dialog: MatDialog) => {

      expect(service.dialogRef).toBeNull();

      service.show();

      expect(service.dialogRef).toBeTruthy();

      service.hide();

      expect(service.dialogRef).toBeFalsy();

      service.hide();

      expect(service.dialogRef).toBeFalsy();

    }
  ));

});
