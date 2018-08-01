import { Injectable } from '@angular/core';

import { Admin } from '../models/admin.model';

@Injectable()
export class AdminService{
    private _admin: Admin;

    public getAdmin(): Admin{
        return this._admin;
    }
}