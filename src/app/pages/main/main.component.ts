import { Component, OnInit } from '@angular/core';
import * as moment from "moment";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  uploadImge!: any;
  filename: any;
  fileType: any;
  AllDatas!: any[];
  expirDate: any;
  filename1: any;
  fileType2: any;
  expirDate1 !: any;
  expirDate2 !: any;
  filename3: any;
  fileType3: any;
  expirDate3 !: any;
  e1Val: any;
  image: any;
  image1: any;
  image2: any;

  constructor() {}

  ngOnInit(): void {
    this.CardData();  
  }

  CardData() {
    this.AllDatas = [
      {
        id: 1,
        name: 'PLI',
        dec: [
          {
            fileName: this.filename,
            fileType: this.fileType,
            date: this.expirDate1,
          },
        ],
      },
      {
        id: 2,
        name: 'Driving Licence',
        dec: [
          {
            fileName: this.filename1,
            fileType: this.fileType2,
            date: this.expirDate2,
          },
        ],
      },
      {
        id: 3,
        name: 'Curriculum Vitae',
        dec: [
          {
            fileName: this.filename3,
            fileType: this.fileType3,
            date: this.expirDate3,
          },
        ],
      },
    ];
  }

  onSelectFile(e: any, e1: any) {
    console.log(e, 'llllll');
    this.e1Val = e1;
    var nDate = new Date();
    var exDate1 = new Date(nDate.getFullYear(), nDate.getMonth(), nDate.getDate() + 2, 0);
    var exDate2 = new Date(nDate.getFullYear(), nDate.getMonth(), nDate.getDate() + 4, 0);
    var exDate3 = new Date(nDate.getFullYear(), nDate.getMonth(), nDate.getDate() + 4, 0);
    
    if(e1 == 1){
      var filetype = e.target.files[0].type;
      this.filename = this.uploadImge.split('\\').pop().split('/').pop();
      this.fileType = filetype.split('\\').pop().split('/').pop();
      this.expirDate1 = moment(exDate1).format("DD-MM-YYYY");
    }else if(e1 == 2){
      var filetype = e.target.files[0].type;
      this.filename1 = this.uploadImge.split('\\').pop().split('/').pop();
      this.fileType2 = filetype.split('\\').pop().split('/').pop();
      this.expirDate2 = moment(exDate2).format("DD-MM-YYYY");
    }else{
      var filetype = e.target.files[0].type;
      this.filename3 = this.uploadImge.split('\\').pop().split('/').pop();
      this.fileType3 = filetype.split('\\').pop().split('/').pop();
      this.expirDate3 = moment(exDate3).format("DD-MM-YYYY");
    }
    this.CardData();
  }


  closeBox(event: any){
    if(event == 1){
      this.AllDatas[0].dec = [];
    }else if(event == 2){
      this.AllDatas[1].dec = [];
    }else{
      this.AllDatas[2].dec = [];
    }
}

}
  
