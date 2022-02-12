import { FormGroup } from '@angular/forms';
import { CustomFormControl } from '../control/custom-form-control';

export class FormGroupUtils {
  /**
   * Marks all controls in a form group as touched
   * @param formGroup - The form group to touch
   */
  public static markTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach((control: CustomFormControl) => {
      control.markAsTouched();
      control.viewUpdate();
    });
  }
}
