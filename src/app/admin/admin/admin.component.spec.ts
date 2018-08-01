import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MockComponent } from 'ng-mocks';

import { AdminComponent } from './admin.component';
import { AdminLoginComponent } from '../admin-login/admin-login.component';

import { AdminService } from '../services/admin.service';

let adminServiceStub = {
    getAdmin: () => {}
}

let fixture: ComponentFixture<AdminComponent>;
let sut: AdminComponent;

describe('AdminComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AdminComponent,
                
                MockComponent(AdminLoginComponent)
            ],
            providers: [
                {provide: AdminService, useValue: adminServiceStub }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AdminComponent);
        sut = fixture.componentInstance;
    });

    //sanity check
    describe('sanity check', () => {
        it('should create the component', () => {
            expect(sut).toBeTruthy();
        });
    });

    //ui tests
    describe('admin-login', () => {
        it('should be present', () => {
            let count: number = fixture.debugElement.queryAll(By.css('admin-login')).length;
            
            expect(count).toBe(1);
        });
    });
});