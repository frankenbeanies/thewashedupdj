import { async, TestBed } from '@angular/core/testing';

import { AdminService } from './admin.service';

var sut: AdminService;

describe('AdminService', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                AdminService
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        sut = TestBed.get(AdminService);
    });

    //sanity check
    describe('sanity check', () => {
        it('should create the service', () => {
            expect(sut).toBeTruthy();
        });
    });
});