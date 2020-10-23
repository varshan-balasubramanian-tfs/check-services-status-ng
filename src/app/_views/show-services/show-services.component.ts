import { Component, OnInit } from '@angular/core';
import { ServiceModel } from 'src/app/_models/service-model';
import { DataService } from 'src/app/_services/get-service-data.service';

@Component({
  selector: 'app-show-services',
  templateUrl: './show-services.component.html',
  styleUrls: ['./show-services.component.scss']
})
export class ShowServicesComponent implements OnInit {

  service_model: ServiceModel[];
  grouping: {};
  constructor(private _data: DataService) { }

  ngOnInit(): void {
    this.getCamstarServiceStatus();
  }

  private getCamstarServiceStatus() {
    this._data.get_all_services().then((data) => {
      console.log(data);
      this.service_model = data as ServiceModel[];

      this.grouping = this.service_model.reduce((r,a) => {
        (r[a.serverName] = r[a.serverName] || []).push(a);
        return r;
      },{});
      console.log(this.grouping);
    })
  }

  



}
