import {Product} from "./Product";
import {Injectable} from "@angular/core";

// TODO: look up what this does?
// this is for what gets injected into other services?!
// @Injectable({
//   providedIn: 'root',
// })
export class ProductsService {
  getProducts(){
    let o :Product[] = [
      // TODO: add more of my products
      // TODO: add a simple appstore optional that if is false or null don't show the app store link.
      // TODO: eventually add beta submission system to the app page.

      new Product("1", "wordsearch.png", "Word Search Match Puzzle", "Play Fun Wordescapes Game",
        "The gameplay of this classic word puzzle game is simple and delightful. " +
        "At the start of each level, you will be presented with a cluster of letters in a box. " +
        "Your main job is to connect the letters to create meaningful English words. " +
        "Creating words will earn you points and take you to further levels. You can connect letters by just touching on them. " +
        "Connect letters to the left, right, up, down, and crossways in every direction. It's flexible and fun to play. " +
        "You can make words forward, backwards. " +
        "You can keep playing this for hours making out words out of clustered letters and have a lot of fun doing it. " +
        "There are several gaming modes to choose from, and each of them are delightful and exciting in their own way. "
      ),
    ]

    return o;
  }

  getProduct(id: string) : Product|null {
    for (const product of this.getProducts()) {
      if (product.id === id){
        return product;
      }
    }
    return null;
  }
}
