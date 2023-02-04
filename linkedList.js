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
}