import { AbstractControl } from "@angular/forms";

export class Customvalidator {

    static validateTime(control:AbstractControl){
        const selectedDate = new Date(control.value);
        const today = new Date();
    
        if (selectedDate < today) {
            control.get('date')?.setErrors({
                invalidDate:true
              })
              return{
                invalidDate:true
              };
        
        }
    
        return null;
    }
}
