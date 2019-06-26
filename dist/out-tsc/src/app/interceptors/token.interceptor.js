import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let TokenInterceptor = class TokenInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        let currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }
        return next.handle(request);
    }
};
TokenInterceptor = tslib_1.__decorate([
    Injectable()
], TokenInterceptor);
export { TokenInterceptor };
//# sourceMappingURL=token.interceptor.js.map