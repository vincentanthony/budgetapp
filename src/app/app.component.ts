import {Component, OnInit} from '@angular/core';

import { Item } from './item/item.model';
import {ItemService} from './item/item.service';
import {DragulaService} from 'ng2-dragula';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ItemService]
})
export class AppComponent implements OnInit {

  items: Item[];

  constructor(private itemService: ItemService, private dragulaService: DragulaService) {
    // dragulaService.dropModel.subscribe((value) => {
    //   this.onDropModel(value.slice(1));
    // });
    // dragulaService.removeModel.subscribe((value) => {
    //   this.onRemoveModel(value.slice(1));
    // });
    //
    // dragulaService.setOptions('items', {
    //   moves: function (el, container, handle) {
    //     return handle.className === 'handle';
    //   }
    // });
  }

  ngOnInit() {
    this.items = this.itemService.getItems();
  }

  private onDropModel(args) {
    let [el, target, source] = args;
    // do something else
  }

  private onRemoveModel(args) {
    let [el, source] = args;
    // do something else
  }

}
