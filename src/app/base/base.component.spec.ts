import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseComponent } from './base.component';

let fixture: ComponentFixture<BaseComponent>;
let sut: BaseComponent;

describe('BaseComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                BaseComponent
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
});