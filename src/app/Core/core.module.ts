import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';

import { DataRetrievalService } from './services/data-retrieval.service';


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
    ],
    providers: [
        DataRetrievalService,
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