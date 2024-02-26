import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMessageComponent } from './error-message.component';
import { By } from '@angular/platform-browser';

describe('ErrorMessageComponent', () => {
  let component: ErrorMessageComponent;
  let fixture: ComponentFixture<ErrorMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ErrorMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErrorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('create component', () => {
    expect(component).toBeTruthy();
  });

  it('renders default error state', () => {
    const messageContainer = fixture.debugElement.query(By.css('[data-testId="error-container"]'));
    expect(messageContainer.nativeElement.textContent).toContain('Someting went wrong! Please try again later.');
  });


  it('renders custom error message', () => {
    component.message = 'Custom error message';
    fixture.detectChanges();
    const messageContainer = fixture.debugElement.query(By.css('[data-testId="error-container"]'));
    expect(messageContainer.nativeElement.textContent).toContain('Custom error message');
  });
});
