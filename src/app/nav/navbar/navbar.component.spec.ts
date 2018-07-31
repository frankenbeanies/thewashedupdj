import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

let fixture: ComponentFixture<NavbarComponent>;
let sut: NavbarComponent;

describe('NavbarComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                NavbarComponent
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NavbarComponent);
        sut = fixture.componentInstance;
    });

    describe('sanity check', () => {
        it('should create the component', () => {
            expect(sut).toBeTruthy();
        });
    });
});