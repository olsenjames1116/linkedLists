import Node from './node.js';

class LinkedList {
    constructor() {
        this.listHead = new Node();
    }

    append(value) {
        const node = new Node(value);
        if(this.listHead.next === null) {
            this.listHead.next = node;
        } else {
            let temp = this.listHead.next;

            while(temp.next !== null) {
                temp = temp.next;
            }
            
            temp.next = node;
        }
    }

    prepend(value) {
        if(this.listHead.next === null ) {
            this.listHead.next = new Node(value);
        } else {
            const firstNode = this.listHead.next;
            this.listHead.next = new Node(value, firstNode);
        }
    }

    toString() {
        let temp = this.listHead.next;
        let string = ``;

        while(temp !== null) {
            string += `( ${temp.data} ) -> `;
            temp = temp.next;
        }

        return string += `null`;
    }
}

const linkedList = new LinkedList();
linkedList.prepend(3);
linkedList.append(1);
linkedList.append(2);
linkedList.prepend(4);
console.log(linkedList.toString());