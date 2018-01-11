import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {


  transform(value: string, param: boolean = true): any {
    let activar: boolean = param;
   console.log("Value: " + value);
    console.log("Param: " + param);
    let retorno: string = "";
  if (param){
    console.log("PIPE CONTRA");
    return value;
  }else {
    for (let i=0;i < value.length;i++ ){
        console.log("PIPE CONTRA 2");
        retorno =retorno+'*';
      }
  }


    return retorno;

  }

}
