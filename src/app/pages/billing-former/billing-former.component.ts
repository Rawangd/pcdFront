import { Component, OnInit } from '@angular/core';
declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}
@Component({
  selector: 'app-billing-former',
  templateUrl: './billing-former.component.html',
  styleUrls: ['./billing-former.component.css']
})
export class BillingFormerComponent implements OnInit {

  public tableData1!: TableData;
  constructor() { }

  ngOnInit(): void {

    this.tableData1 = {
      headerRow: [ 'ID', 'Bill', 'Date', 'course', 'Price'],
      dataRows: [
          ['1', '125652852125', '21/09/2022', 'Français avec Mehdi njema', '36,738dt'],
          ['2', '156328942357', '10/02/2022', 'Français avec Mehdi njema', '23,789dt'],
          ['3', '120326895204', '02/10/2022', 'Français avec Mehdi njema', '56,142dt'],
          ['4', '032681200589', '12/12/2021', 'Français avec Mehdi njema', '38,735dt'],
          ['5', '102351887842', '03/05/2020', 'Français avec Mehdi njema', '63,542dt'],
          ['6', '956202718202', '01/02/2022', 'Français avec Mehdi njema', '78,615dt']
      ]
  };
  }

}
