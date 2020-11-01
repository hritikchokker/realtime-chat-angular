import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';

import { ErrorStateMatcher } from '@angular/material/core';

export class Validations implements ErrorStateMatcher {

    isErrorState(control:FormControl|null,form:FormGroupDirective|NgForm|null):boolean{
        const isSubmitted:boolean = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));;
    }
    
}
