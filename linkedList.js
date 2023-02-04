import Node from './node.js';

class LinkedList {
    constructor() {
        this.listHead = new Node();
    }

    // Return and set the first Node in the list.
    get head() {
        return this.listHead.next;
    }

    set head(value) {
        this.listHead.next = value;
    }

    // Return and set the last Node in the list.
    get tail() {
        // Returns null if there are no Nodes in the list.
        if(this.head === null) return this.listHead;

        let temp = this.head;

        // The last Node is reached when the one following it is null.
        while(temp.next !== null) {
            temp = temp.next;
        }

        return temp;
    }

    set tail(value) {
        this.tail.next = value;
    }

    // Return how many Nodes are in the list.
    get size() {
        // Returns 0 if there are no Nodes in the list.
        if(this.head === null ) return 0;

        let temp = this.head;
        let length;

        // The last Node is reached when the one following it is null.
        for(length = 1; temp.next !== null; length++) {
            temp = temp.next;
        }

        return length;
    }

    // Push a new Node to the end of the list.
    append(value) {
        const node = new Node(value);

        /* If there are not any Nodes in the list yet, the first Node is now the appended Node. Otherwise, the final 
        Node is now the appended Node. */
        this.head === null ? this.head = node : this.tail = node;
    }

    // Add a new node to the front of the list.
    prepend(value) {
        // If there are not any Nodes in the list yet, the first Node is not the prepended Node.
        if(this.head === null ) {
            this.head = new Node(value);
        } else {
            /* There are Nodes in the list, so the first Node now becomes the prepended Node and the pointer is set
            to the previous first Node's pointer. */
            const firstNode = this.head;
            this.head = new Node(value, firstNode);
        }
    }

    // Convert the list to a visual representation.
    toString() {
        let temp = this.head;
        let string = ``;

        // The last Node is reached when the one following it is null.
        while(temp !== null) {
            string += `( ${temp.data} ) -> `;
            temp = temp.next;
        }

        return string += `null`;
    }

    // Determines which Node is at the specified index.
    at(index) {
        // If there is an error on entering an index that does not exist in the list, it is handled here.
        if (index >= this.size || index < 0) return undefined;

        let temp = this.listHead.next;

        // Continues through Node pointers until it reaches the correct index.
        for(let i = 0; i < index; i++) {
            temp = temp.next;
        }

        return temp;
    }

    // Remove and return the last Node in the list.
    pop() {
        if(this.size === 1) {
            // If the list only contains one Node, it returns that node and clears the list.
            const removedNode = this.head;
            this.listHead.next = null;
            return removedNode;
        }

        if(this.head !== null) {
            // If the head is not null, there are Nodes in the list.
            let temp = this.head;

            // The last node is reached when the one following it is null
            while(temp.next.next !== null) {
                temp = temp.next;
            }

            // Remove the Node by removing the pointer that points to the Node.
            const removedNode = temp.next;
            temp.next = null;
            return removedNode;
        }

        return undefined;
    }

    // Returns a boolean if the specified value is in the list.
    contains(value) {
        // If the first Node is null, there are not any Nodes in the list.
        if(this.head === null) return false;

        let temp = this.head;

        // Continues through the list until it reaches the end.
        for(let i = 0; i < this.size; i++) {

            if(temp.data === value) {
                // Reached if the value is found in the list.
                return true;
            }

            temp = temp.next;
        }

        // Reached if the iterator makes it through the list without finding the value.
        return false;
    }

    // Returns the index of the specified value.
    find(value) {
        // The list does not contain the value, so there is not an associated index.
        if(!this.contains(value)) return null;

        // Reached if the list is known to contain the specified value.
        let temp = this.head;

        // Continues through the list until it reaches the end.
        for(let index = 0; index < this.size; index++) {

            if(temp.data === value) {
                return index;
            }

            temp = temp.next;
        }
    }

    // Inserts the value at the specified index.
    insertAt(value, index) {
        // If there is an error on entering an index that does not exist in the list, it is handled here.
        if(index >= this.size || index < 0) return undefined;

        // If the index is zero, this is the same process as prepending the value.
        if(index === 0) {
            this.prepend(value);
            return;
        }

        let temp = this.head;
        let previousNode;

        // Continues through the list until it reaches the specified index.
        for(let i = 0; i < index; i++) {
            previousNode = temp;
            temp = temp.next;
        }

        /* To insert the value, the value that pointed to the previous Node at that index must now point to the new
        Node. */
        previousNode.next = new Node(value, temp);
    }

    // Removes the value at the specified index.
    removeAt(index) {
        // If there is an error on entering an index that does not exist in the list, it is handled here.
        if(index >= this.size || index < 0) return undefined;

        // If the index is 0, the head Node is replaced by the next Node in the list.
        if(index === 0) {
            this.listHead.next = this.head.next;
        }

        let temp = this.head;
        let previousNode;

        // Continues through the list until it reaches the specified index.
        for(let i = 0; i < index; i++) {
            previousNode = temp;
            temp = temp.next;
        }

        // To remove a Node, the previous Node must point to the Node after the removed Node.
        previousNode.next = temp.next;
    }
}

// Everything below here is testing of the created methods.
const linkedList = new LinkedList();

linkedList.append(1);
linkedList.prepend(3);
linkedList.append(2);
linkedList.prepend(4);

console.log(`toString; ${linkedList.toString()}`);

console.log(`size: ${linkedList.size}`);

console.log(`head: ${JSON.stringify(linkedList.head)}`);

console.log(`tail: ${JSON.stringify(linkedList.tail)}`);

console.log(`at(2): ${JSON.stringify(linkedList.at(2))}`);
console.log(`at(0): ${JSON.stringify(linkedList.at(0))}`);
console.log(`at(5): ${linkedList.at(5)}`);

console.log(`pop: ${JSON.stringify(linkedList.pop())}`);
console.log(`toString: ${linkedList.toString()}`);

console.log(`contains(3): ${linkedList.contains(3)}`);
console.log(`contains(5): ${linkedList.contains(5)}`);

console.log(`find(1): ${linkedList.find(1)}`);
console.log(`find(5): ${linkedList.find(5)}`);

linkedList.insertAt('inserted', 1);
console.log(linkedList.toString());

linkedList.removeAt(1);
console.log(linkedList.toString());