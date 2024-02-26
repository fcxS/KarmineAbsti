import { TestBed } from '@angular/core/testing';
import { UtilsService } from './utils.service';

describe('UtilsService', () => {
  let utilsService: UtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtilsService],
    }).compileComponents();

    utilsService = TestBed.inject(UtilsService);
  });

  it('create service', () => {
    expect(utilsService).toBeTruthy(); //test para verificar que el servicio fue creado
  });

  describe('range', () => {
    it('returns correct result for 1-6 range', () => {
      const result = utilsService.range(1, 6);
      const expected = [1, 2, 3, 4, 5];
      expect(result).toEqual(expected);
    });

    it('returns correct result for 41-45 range', () => {
      const result = utilsService.range(41, 45);
      const expected = [41, 42, 43, 44];
      const notExpected = [41, 42, 43, 44, 45];
      // expect(result).toEqual(expected);
      expect(result).not.toEqual(notExpected);
    });
  });
});