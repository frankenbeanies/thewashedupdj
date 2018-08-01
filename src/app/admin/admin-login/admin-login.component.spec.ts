import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLoginComponent } from './admin-login.component';

let fixture: ComponentFixture<AdminLoginComponent>;
let sut: AdminLoginComponent;

describe('AdminLoginComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AdminLoginComponent
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AdminLoginComponent);
        sut = fixture.componentInstance;
    });

    //sanity check
    describe('sanity check', () => {
        it('should create the component', () => {
            expect(sut).toBeTruthy();
        });
    });
});