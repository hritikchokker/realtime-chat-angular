import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultvalue'
})
export class DefaultvaluePipe implements PipeTransform {
  falsyValues:any=[null,undefined,'null','undefined','',' '];
  transform(value: string,defaultParam:string): string {

    if(!defaultParam){
      return 'N/A'
    }
    if(this.falsyValues.find(el=>el === value)){
      return defaultParam;
    }else{
      return value
    }

  }

}
