import { Component, OnInit } from '@angular/core';
import { ServiceModel } from 'src/app/_models/service-model';
import { DataService } from 'src/app/_services/get-service-data.service';

@Component({
  selector: 'app-show-services',
  templateUrl: './show-services.component.html',
  styleUrls: ['./show-services.component.scss']
})
export class ShowServicesComponent implements OnInit {

  service_model: ServiceModel[] = [];

  constructor(private _data: DataService) { }

  ngOnInit(): void {
    this.getCamstarServiceStatus();
  }

  private getCamstarServiceStatus() {
    this._data.get_all_services().then((data: ServiceModel[]) => {
      data.forEach(item => {
        this.service_model.push(item);
      });
      console.log(this.service_model);
    })
  }



}
