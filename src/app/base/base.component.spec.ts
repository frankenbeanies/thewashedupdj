import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { MockModule } from 'ng-mocks';

import { NavModule } from '../nav/nav.module';

import { BaseComponent } from './base.component';

let fixture: ComponentFixture<BaseComponent>;
let sut: BaseComponent;

describe('BaseComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                BaseComponent
            ],
            imports: [
                MockModule(RouterModule),

                MockModule(NavModule)
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BaseComponent);
        sut = fixture.componentInstance;
    });

    describe('sanity check', () => {
        it('should instantiate the component', () => {
            expect(sut).toBeTruthy();
        });
    });

    //ui tests
    describe('navbar', () => {
        it('should be present', () => {
            let count: number = fixture.debugElement.queryAll(By.css('navbar')).length;

            expect(count).toBe(1);
        });
    });
});