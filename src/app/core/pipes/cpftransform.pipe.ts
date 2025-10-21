import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpftransform',
  standalone: false
})
export class CpftransformPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }

}
