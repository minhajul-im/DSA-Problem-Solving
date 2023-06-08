// graph start

class Graph {
  constructor() {
    this.graph = {};
  }

  insert(key, value) {
    //only key & value

    if (this.graph[key]) {
      this.graph[key].push(value);
    } else {
      this.graph[key] = [value];
    }

    // second case

    // if (this.graph[value]) {
    //   this.graph[value].push(key);
    // } else {
    //   this.graph[value] = [key];
    // }
  }

  getData(key, index) {
    return this.graph[key].at(index);
  }
}

let gp = new Graph();
gp.insert("name", "Minhajul");
gp.insert("age", 20);
gp.insert("contact", "hello@minahjul.com");
gp.insert("name", "Jonas");
gp.insert("age", 21);
gp.insert("contact", "hello@jonas.com");
gp.insert("contact", "hello@jack.com");

console.log(gp.getData("name", 1));

console.log(gp);
