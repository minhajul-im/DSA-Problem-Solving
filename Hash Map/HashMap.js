class HashMap {
  constructor() {
    this.map = {};
  }

  // set data key, value
  setData(key, value) {
    this.map[key] = value;
  }

  // get Data
  getData(key) {
    if (this.map[key]) {
      return this.map[key];
    } else return false;
  }

  // print Data
  print() {
    let data = Object.entries(this.map);

    for (const [key, value] of data) {
      console.log(key, value);
    }
  }

  // print data for in loop
  printForInLoop() {
    let data = this.map;

    for (const key in data) {
      console.log(key, data[key]);
    }
  }
}
const hashMap = new HashMap();
hashMap.setData("Name", "Minhajul Islam");
hashMap.setData("age", 21);
hashMap.setData("learn", "English & coding");
hashMap.setData("profession", "Jobholder");
hashMap.setData("address", "Uttara, Dhaka");
hashMap.print();
hashMap.printForInLoop();
console.log(hashMap.getData("Name"));
console.log(hashMap);
