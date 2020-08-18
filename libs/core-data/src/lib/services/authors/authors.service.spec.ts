import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { AuthorsService } from './authors.service';
import { mockAuthor } from '@bba/testing';

describe('AuthorsService', () => {
  const model = 'authors';
  let httpTestingController: HttpTestingController;
  let service: AuthorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(AuthorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('should call http.', () => {
    it('get() on service.all()', () => {
      service.all().subscribe((res) => {
        expect(res).toEqual({ ...mockAuthor });
      });

      const req = httpTestingController.expectOne(service['getUrl']());
      req.flush([{ ...mockAuthor }]);
      httpTestingController.verify();
    });

    it('get(url(model.id)) on service.find(model.id)', () => {
      service.find(mockAuthor.id).subscribe((res) => {
        expect(res).toEqual({ ...mockAuthor });
      });

      const req = httpTestingController.expectOne(
        service['getUrlWithId'](mockAuthor.id)
      );
      req.flush({ ...mockAuthor });
      httpTestingController.verify();
    });

    it('post(url, model) on service.create(model)', () => {
      service.create(mockAuthor).subscribe((res) => {
        expect(res).toEqual({ ...mockAuthor });
      });

      const req = httpTestingController.expectOne(service['getUrl']());
      req.flush({ ...mockAuthor });
      httpTestingController.verify();
    });

    it('put(url(model.id), model) on service.create(model)', () => {
      service.update(mockAuthor).subscribe((res) => {
        expect(res).toEqual({ ...mockAuthor });
      });

      const req = httpTestingController.expectOne(
        service['getUrlWithId'](mockAuthor.id)
      );
      req.flush({ ...mockAuthor });
      httpTestingController.verify();
    });

    it('delete(url(model.id)) on service.delete(model.id)', () => {
      service.delete(mockAuthor).subscribe((res) => {
        expect(res).toEqual({ ...mockAuthor });
      });

      const req = httpTestingController.expectOne(
        service['getUrlWithId'](mockAuthor.id)
      );
      req.flush({ ...mockAuthor });
      httpTestingController.verify();
    });
  });
});
