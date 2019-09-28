import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagerService } from './services/user-manager.service';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
    ],
    providers: [
        UserManagerService,
    ],
    bootstrap: [],
    exports: []
})
export class LoginModule { }
