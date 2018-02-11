import { TestBed, inject } from '@angular/core/testing';

import { GolfCoursesServiceService } from './golf-courses-service.service';

describe('GolfCoursesServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GolfCoursesServiceService]
    });
  });

  it('should be created', inject([GolfCoursesServiceService], (service: GolfCoursesServiceService) => {
    expect(service).toBeTruthy();
  }));
});
