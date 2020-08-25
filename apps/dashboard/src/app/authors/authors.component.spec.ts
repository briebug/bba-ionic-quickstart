import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';

import { CoreDataModule } from '@bba/core-data';
import { CoreStateModule, AuthorsFacade } from '@bba/core-state';
import { MaterialModule } from '@bba/material';

import { AuthorDetailsComponent } from './author-details/author-details.component';
import { AuthorsListComponent } from './authors-list/authors-list.component';
import { AuthorsComponent } from './authors.component';

import { mockAuthor, mockEmptyAuthor } from '@bba/testing';

describe('AuthorsComponent', () => {
  let component: AuthorsComponent;
  let fixture: ComponentFixture<AuthorsComponent>;
  let de: DebugElement;
  let authorsFacade: AuthorsFacade;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AuthorsComponent,
        AuthorDetailsComponent,
        AuthorsListComponent,
      ],
      imports: [
        CoreDataModule,
        CoreStateModule,
        FormsModule,
        MaterialModule,
        HttpClientTestingModule,
        NoopAnimationsModule,
        RouterTestingModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    authorsFacade = TestBed.inject(AuthorsFacade);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should on select call authorsFacade selectAuthor', () => {
    const spy = jest.spyOn(authorsFacade, 'selectAuthor');

    component.selectAuthor(mockAuthor);

    expect(spy).toHaveBeenCalledWith(mockAuthor.id);
  });

  describe('should on save call authorsFacade', () => {
    it('updateAuthor', () => {
      const spy = jest.spyOn(authorsFacade, 'updateAuthor');

      component.saveAuthor(mockAuthor);

      expect(spy).toHaveBeenCalledWith(mockAuthor);
    });

    it('createAuthor', () => {
      const spy = jest.spyOn(authorsFacade, 'createAuthor');

      component.saveAuthor(mockEmptyAuthor);

      expect(spy).toHaveBeenCalledWith(mockEmptyAuthor);
    });
  });

  it('should on delete call authorsFacade deleteAuthor', () => {
    const spy = jest.spyOn(authorsFacade, 'deleteAuthor');

    component.deleteAuthor(mockAuthor);

    expect(spy).toHaveBeenCalledWith(mockAuthor);
  });
});
