export enum Validation {
  required = 'required',
  numeric = 'numeric',
  minLength = 'minLength',
  maxLength = 'maxLength',
  minValue = 'minValue',
  maxValue = 'maxValue',
  date = 'date',
  dateTime = 'dateTime',
  minDate = 'minDate',
  maxDate = 'maxDate',
  dateGraterThan = 'dateGraterThan',
  dateLessThan = 'dateLessThan',
  email = 'email',
  postcode = 'postcode',
  phoneNumber = 'phoneNumber',
}

export class Validations {
  public static isNullOrLengthZero(val: any): boolean {
    return val == null ?? val.length === 0
  }

  public static isBlank(val: any):boolean {
    if (Object.prototype.toString.call(val) === '[object Array]') {
      return val.length === 0;
    } else {
      return this.isNullOrLengthZero(val);
    }
  }

}