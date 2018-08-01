import { NgModule } from '@angular/core';

import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

import { AdminService } from './services/admin.service';

@NgModule({
    declarations: [
        AdminComponent,
        AdminLoginComponent
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