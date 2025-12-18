import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { IUser } from '../models/User';
import { HttpClientTestingModule } from '@angular/common/http/testing';

// test suite description
describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getUser should return string value', () => {
    expect(service.getUser().subscribe((value =>{
      expect(value?.email).toBe('string value');
    })))
  });

});
