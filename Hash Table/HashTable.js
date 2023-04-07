class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hashFunc(value) {
    let str = value + "";
    let sum = 0;

    for (let i = 0; i < str.length; i++) {
      sum += str.charCodeAt(i);
    }

    let index = sum % this.size;
    return index;
  }

  setData(value) {
    let index = this.hashFunc(value);
    let tableIndex = this.table[index];

    if (!tableIndex) {
      tableIndex = [value];
    } else {
      tableIndex.push(value);
    }

    this.table[index] = tableIndex;
  }

  getData(value) {
    let index = this.hashFunc(value);
    let tableIndex = this.table[index];
    console.log(tableIndex);

    for (let i = 0; i < tableIndex.length; i++) {
      if (value === tableIndex[i]) return `${value} Found!`;
    }

    return `${value} isn't Found!`;
  }
}
const hash = new HashTable(5);
hash.setData("hi");
hash.setData("hello");
hash.setData("1971");
hash.setData(1971);
console.log(hash.getData("1"));

console.log(hash);
