import { TestBed, inject } from '@angular/core/testing';

import { SpecificCourseServiceService } from './specific-course-service.service';

describe('SpecificCourseServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpecificCourseServiceService]
    });
  });

  it('should be created', inject([SpecificCourseServiceService], (service: SpecificCourseServiceService) => {
    expect(service).toBeTruthy();
  }));
});
