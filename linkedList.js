import Node from './node.js';

class LinkedList {
    constructor() {
        this.listHead = new Node();
    }

    get head() {
        return this.listHead.next;
    }

    set head(value) {
        this.listHead.next = value;
    }

    get tail() {
        if(this.head === null) return this.listHead;

        let temp = this.head;

        while(temp.next !== null) {
            temp = temp.next;
        }

        return temp;
    }

    set tail(value) {
        this.tail.next = value;
    }

    get size() {
        if(this.head === null ) return 0;

        let temp = this.head;
        let length;

        for(length = 1; temp.next !== null; length++) {
            temp = temp.next;
        }

        return length;
    }

    append(value) {
        const node = new Node(value);

        this.head === null ? this.head = node : this.tail = node;
    }

    prepend(value) {
        if(this.head === null ) {
            this.head = new Node(value);
        } else {
            const firstNode = this.head;
            this.head = new Node(value, firstNode);
        }
    }

    toString() {
        let temp = this.head;
        let string = ``;

        while(temp !== null) {
            string += `( ${temp.data} ) -> `;
            temp = temp.next;
        }

        return string += `null`;
    }

    at(index) {
        if (index > this.size || index < 0) return undefined;

        let temp = this.listHead.next;

        for(let i = 0; i < index; i++) {
            temp = temp.next;
        }

        return temp;
    }

    pop() {
        if(this.size === 1) {
            const removedNode = this.head;
            this.listHead.next = null;
            return removedNode;
        }

        if(this.head !== null) {
            let temp = this.head;

            while(temp.next.next !== null) {
                temp = temp.next;
            }

            const removedNode = temp.next;
            temp.next = null;
            return removedNode;
        }

        return undefined;
    }
}

const linkedList = new LinkedList();

linkedList.prepend(3);
linkedList.append(1);
linkedList.append(2);
linkedList.prepend(4);

console.log(linkedList.toString());

console.log(linkedList.size);

console.log(linkedList.head);

console.log(linkedList.tail);

console.log(linkedList.at(2));
console.log(linkedList.at(0));
console.log(linkedList.at(5));

console.log(linkedList.pop());
console.log(linkedList.toString());
console.log(linkedList.pop());
console.log(linkedList.toString());
console.log(linkedList.pop());
console.log(linkedList.toString());
console.log(linkedList.pop());
console.log(linkedList.toString());