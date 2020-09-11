import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any, sname:any): any {
    if(sname == ""){
      return value;
    }
    const obj:any[]=[];
    for(let i=0;i<=value.length-1;i++){
      let uName: string = value[i].name;
      if(uName.startsWith(sname)){
        obj.push(value[i])
      }
    }
    return obj;
  }

}
