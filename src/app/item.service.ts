import { Item } from './item.model';


export class ItemService {

  private items: Item[] = [
    new Item('Lone Suspect', 1, 'Allow', 1, 40000, 40000 ),
    new Item('Mike Macari', 1, 'Allow', 1, 10000, 10000 ),
    ];

  getItems() {
    return this.items.slice();
  }
}
