import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(password: string, mostrar:boolean=true): string {

     if(!mostrar){
        let salida:string="";
        for (let i=0; i<password.length; i++){
           salida += "*";
        }
        return salida;
     }else{
        return password;
     }
  }

}
