import { Component, OnInit } from '@angular/core';

import {CD} from '../model/cd';
import { CdService } from 'src/app/service/cds.service';
import { GenerateService } from 'src/app/service/generate.service';

@Component({
  selector: 'app-my-flights',
  templateUrl: './cds.component.html',
  styleUrls: ['./cds.component.scss']
})
export class CdsComponent implements OnInit {
  public cds : CD[];
  selectedCds: CD[];
  cd: CD;
  uploadFile: File;
  file: any;
  cdDialog: boolean;

  constructor(private flightService: CdService, private generateService: GenerateService) {
    this.getFlightsData();
  }

  ngOnInit() {
    this.cds = [];
    this.cd = {} as CD;
    this.selectedCds =[];
    
  }

  private getFlightsData() {
    this.flightService.getCdsData().subscribe(data => {
      this.cds = data;
    });
  }

  onRowSelect(event) {
    this.selectedCds = [];
    this.selectedCds.push(event.data);
  }

  onRowUnselect(event) {
    this.selectedCds = [];
  }

  addNewCd(){
    this.cdDialog = true;
  }

  saveCd(){
    this.cdDialog = false;
    this.cd.id = this.generateService.createId();
    this.cds.push(this.cd);
    this.cd = {} as CD;
  }

  hideDialog(){
    this.cdDialog = false;
  }

  removeCd(){
    const index = this.cds.indexOf(this.selectedCds[0]);
    this.cds.splice(index,1);
  }

  saveChanges(){
    this.flightService.saveToFile(this.cds)
  }

  onUpload(event) {
    this.file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      const cdsString = fileReader.result.toString();
      console.log(cdsString);
      this.cds = JSON.parse(cdsString)
    }
    fileReader.readAsText(this.file);
  }
}
