import { AbstractControl } from '@angular/forms';

export function PasswordValidator(
  control: AbstractControl
): { [key: string]: boolean } {
  const password = control.get('password').value;
  const confirmPassword = control.get('confirmPassword').value;
  return password && confirmPassword && password !== confirmPassword
    ? { misMatch: true }
    : null;
  //   const password = control.get("password");
  //   const confirmPassword = control.get("confirmPassword");
  //   if (password.pristine || confirmPassword.pristine) {
  //     return null;
  //   }
  //   return password && confirmPassword && password.value !== confirmPassword.value
  //     ? { misMatch: true }
  //     : null;
}
