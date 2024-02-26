import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';
import { By } from '@angular/platform-browser';
import { first } from 'rxjs';
import { UtilsService } from '../utils.service';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;
  const mockUtilsService = {
    range: () => [1, 2, 3, 4, 5],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationComponent] ,//importar el modulo a testear , lo de async await viene por defecto
      providers: [{provide: UtilsService, useValue: mockUtilsService }]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginationComponent); //crear el componente a testear
    component = fixture.componentInstance; //instanciar el componente
    component.total = 50; // simulacion valores que tendria en el onInit
    component.limit = 10; // simulacion valores que tendria en el onInit
    component.currentPage = 1; // simulacion valores que tendria en el onInit
    fixture.detectChanges(); //detectar cambios
  });

  it('should create pagination component', () => {
    expect(component).toBeTruthy();
  });
  
  it('renders correct pagination', () => {
    const pageContainer = fixture.debugElement.queryAll(By.css('[data-testid="page-container"]')); //conseguir el elemento por ID
    // expect(pageContainer.length).toBe(1);
    expect(pageContainer.length).toBe(5); // 50/10 = 5 elementospor pagina

    expect(pageContainer.at(0)?.nativeElement.textContent).toContain('1'); // valor de la pagina 1
    // expect(pageContainer.at(0)?.nativeElement.textContent).toEqual('1'); //  " 1 "

  });



  it('should emit a clicked page', () => {
    const pageContainer = fixture.debugElement.queryAll(By.css('[data-testid="page-container"]')); //conseguir el elemento por ID
    let clickedPage: number | undefined; //variable para guardar el valor de la pagina clickeada

    component.pageChangeEvent.pipe(first()).subscribe((page) => {  //escuchar el evento de cambio de pagina solo la primera vez first()
      clickedPage = page; //guardar el valor de la pagina clickeada
    });

    pageContainer.at(0)?.triggerEventHandler('click'); //simular el evento de click en la pagina 1

    expect(clickedPage).toBe(1); //verificar que el valor de la pagina clickeada sea 1
  });

});
