import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient ) {

   }

   public get_all_services()
   {
     return this.httpClient.get(environment.api_base+'/winservices').toPromise();
   }
}
