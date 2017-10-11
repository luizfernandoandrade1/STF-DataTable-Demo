import {DataTableUtil} from '../../node_modules/stf-datatable/data-table/data-table.util';
import { AfterViewInit, Component, OnInit } from '@angular/core';

let data = [{id: 1, registro: "556325/66", data: "25/06/2015", vara: "Cívil", status: "Aguardando Análise" },
{id: 2, registro: "556441/77", data: "26/06/2025", vara: "Crime", status:"Pendente"},
{id: 3, registro: "559836/77", data: "27/06/2025", vara: "Cívil", status:"Analisado"},
{id: 4, registro: "563565/77", data: "28/06/2025", vara: "Crime", status:"Analisado"},
{id: 5, registro: "554169/77", data: "29/06/2025", vara: "Crime", status:"Analisado"},
{id: 6, registro: "556321/77", data: "21/06/2025", vara: "Família", status:"Analisado"},
{id: 7, registro: "556465/77", data: "22/06/2025", vara: "Família", status:"Recusado"},
{id: 8, registro: "556465/77", data: "22/06/2025", vara: "Família", status:"Recusado"},
{id: 9, registro: "556658/77", data: "23/06/2025", vara: "Família", status:"Recusado"}];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends DataTableUtil implements AfterViewInit{
  title = 'app';
  dataTest: any[] = [];
  fullData: any[] = [];

  addColumnByEvent(column: any) {
    super.addColumnByEvent(column);
  }
  constructor(){
    super();
    this.dataTest = data;
  }

  public ngAfterViewInit(): void {
    this.dataTest = super.buildDataTableProperties(this.dataTest);
  }
   
}
