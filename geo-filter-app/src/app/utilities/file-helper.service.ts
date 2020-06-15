import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileHelperService {

  constructor() { }
  

  public download(filename, text) {

    if(filename == null || filename == '' || text == null || text == '')
      return false;

    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
    return true;
  }
}
