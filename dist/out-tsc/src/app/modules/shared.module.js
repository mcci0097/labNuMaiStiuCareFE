import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { WidgetsModule } from './widgets.module';
import { AuthService } from '../services/auth.service';
import { TokenInterceptor, ErrorInterceptor } from '../interceptors';
let SharedModule = class SharedModule {
};
SharedModule = tslib_1.__decorate([
    NgModule({
        declarations: [],
        imports: [
            CommonModule,
            WidgetsModule
        ],
        exports: [
            WidgetsModule,
        ],
        providers: [
            AuthService,
            { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
            { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        ]
    })
], SharedModule);
export { SharedModule };
;
//# sourceMappingURL=shared.module.js.map