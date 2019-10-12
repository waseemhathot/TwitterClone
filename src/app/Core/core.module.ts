import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';

import { DataRetrievalService } from './services/data-retrieval.service';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'src/app/Core/interceptors/token-interceptor';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
    ],
    providers: [
        DataRetrievalService,
        { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    ],
    exports: []
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(`CoreModule has already been loaded. Import core modules in AppModule only.`);
        }
    }
}