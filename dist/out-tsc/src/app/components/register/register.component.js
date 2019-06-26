import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let RegisterComponent = class RegisterComponent {
    constructor(formBuilder, router, authService, toastr) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.toastr = toastr;
        this.loading = false;
        this.submitted = false;
        this.hide = true;
        this.errors = [];
    }
    ngOnInit() {
        this.signUpForm = this.formBuilder.group({
            firstname: ['', [Validators.required]],
            lastname: ['', [Validators.required]],
            username: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            passwords: this.formBuilder.group({
                password: ['', [Validators.required]],
                confirmedPassword: ['', [Validators.required]],
            }, { validator: this.passwordConfirming }),
        });
    }
    get form() { return this.signUpForm.controls; }
    get passwords() { return this.signUpForm.controls.passwords; }
    passwordConfirming(c) {
        if (c.get('password').value !== c.get('confirmedPassword').value) {
            return { invalid: true };
        }
    }
    arePasswordsEqual() {
        return this.passwords.controls.password.value !== this.passwords.controls.confirmedPassword.value && this.passwords.controls.password.touched && this.passwords.controls.confirmedPassword.touched;
    }
    onSubmit() {
        this.submitted = true;
        if (this.signUpForm.invalid) {
            return;
        }
        this.loading = true;
        let user = {
            firstName: this.form.firstname.value,
            lastName: this.form.lastname.value,
            username: this.form.username.value,
            password: this.passwords.controls.password.value,
            email: this.form.email.value,
        };
        this.authService.register(user)
            .subscribe(u => {
            this.toastr.success('Account created successfully!', '', {
                positionClass: 'toast-bottom-center',
            });
        }, error => {
            this.errors = [error];
            this.loading = false;
        });
        this.router.navigate(['/login']);
    }
};
RegisterComponent = tslib_1.__decorate([
    Component({
        selector: 'app-register',
        templateUrl: './register.component.html',
        styleUrls: ['./register.component.scss']
    })
], RegisterComponent);
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map