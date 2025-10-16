import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneTransform',
  standalone: false
})
export class PhoneTransformPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  }

}
