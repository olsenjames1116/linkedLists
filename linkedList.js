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

    getSize() {
        return this.list.length;
    }
}