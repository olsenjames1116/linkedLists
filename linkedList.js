class LinkedList {
    constructor(list) {
        this.list = list;
    }

    append(node) {
        this.list.push(node);
    }

    prepend(node) {
        this.list.unshift(node);
    }

    get size() {
        return this.list.length;
    }

    get head() {
        return this.list[0];
    }

    get tail() {
        return this.list[this.size - 1];
    }
}

const linkedList = new LinkedList([1, 2, 3, 4]);
console.log(linkedList.tail);