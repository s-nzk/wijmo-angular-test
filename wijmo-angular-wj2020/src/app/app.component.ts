import { Component, ViewChild, OnInit } from '@angular/core';
import { CollectionView } from '@grapecity/wijmo';
import { WjFlexGrid } from "@grapecity/wijmo.angular2.grid";
import { CellRangeEventArgs } from "@grapecity/wijmo.grid";


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit{

  data = new CollectionView();

  @ViewChild("grid", {static: true})
  grid: WjFlexGrid;

  ngOnInit(): void {
    this.data.sourceCollection = [{ name: "1000" },{ name: "2000" }];

    this.grid.selectionChangedNg.subscribe((e: CellRangeEventArgs) => {
      console.log(e);
      if(e.row === -1) {
        console.log('e.rowは-1です');
      }
    });
  }

  clickButton() {
    console.log('空配列を代入します');
    this.data.sourceCollection = [];
  }

}