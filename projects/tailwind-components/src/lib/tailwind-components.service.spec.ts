import { TestBed } from '@angular/core/testing';

import { TailwindComponentsService } from './tailwind-components.service';

describe('TailwindComponentsService', () => {
  let service: TailwindComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TailwindComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
