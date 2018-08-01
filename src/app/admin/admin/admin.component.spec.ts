import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponent } from './admin.component';

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
                AdminComponent
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
});