import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string) {
    if (value.length === 0 || filterString === '') {
      return value;
    }

    const employees = [];
    for (const employee of value) {
      if (employee['p_category'] === filterString) {
        employees.push(employee);
      }
    }
    return employees;
  }

}
