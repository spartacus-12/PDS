import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileUploaderService {

  constructor(private http: HttpClient) { }
  uploadUserPic(fileupload: File ) {
    const formdata: FormData = new FormData();
    formdata.append('Image',fileupload,fileupload.name);
    
    return this.http.post('http://localhost:5000/', formdata);
                  
  }
      
}
