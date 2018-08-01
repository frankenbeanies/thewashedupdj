import { Component } from '@angular/core';

import { AdminService } from '../services/admin.service';

@Component({
    selector: 'admin',
    templateUrl: './admin.component.html'
})
export class AdminComponent{
    public constructor(protected adminService: AdminService){
        
    }
}