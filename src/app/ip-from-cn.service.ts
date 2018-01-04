import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class IpFromCNService {
	flag: boolean = false;
	data: any = {};
	constructor(
		private http: Http,
	) {}

	getIpInfo() {
    this.http.get(`http://freegeoip.net/json/`)
    .map((res:Response) => res.json())
    .subscribe(data =>
    {
    	if(data.country_code === "CN") {
    		this.flag = true;
    	}
    })
  }

 	ipFromCN() {
 		return this.flag;
 	} 
}