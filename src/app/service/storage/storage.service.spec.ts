import { TestBed, inject } from '@angular/core/testing';

// Enum
import { StorageType } from './storage-type.enum';

// Service
import { StorageService } from './storage.service';

describe('StorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StorageService],
      imports: []
    });
  });

  it('should be created', inject([StorageService], (service: StorageService) => {
    expect(service).toBeTruthy();
  }));

});
