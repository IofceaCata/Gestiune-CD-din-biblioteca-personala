import { Injectable } from '@angular/core';
import { CD } from "../model/cd";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import * as saveAs from 'file-saver';

@Injectable()
export class CdService {
  
  constructor(private http: HttpClient) { 
  }

  public getCdsData() : Observable<CD[]>{
    let url = "assets/cds.json";
    return this.http.get<CD[]>(url);
  }

  saveToFile(cds){
    var json = JSON.stringify(cds);
    json.replace(/\n/g,'')
    console.log(json)
    const blob = new Blob([json], {type : 'txt'});
    saveAs(blob, "cds.txt");
  }
}