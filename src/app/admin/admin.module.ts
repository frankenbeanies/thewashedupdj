import { NgModule } from '@angular/core';

import { AdminComponent } from './admin/admin.component';

import { AdminService } from './services/admin.service';

@NgModule({
    declarations: [
        AdminComponent
    ],
    exports: [
        AdminComponent
    ],
    providers: [
        AdminService
    ]
})
export class AdminModule{
    
}