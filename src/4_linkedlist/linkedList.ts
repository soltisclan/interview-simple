// --- Directions ---
//
// Run the test suite with the following command:
// npm run test linkedlist
// 
// While the test suite is running in watch mode, implement
// each method in the LinkedList class specified below, paying
// close attention to the parameters of each method and what the 
// method is expected to return. 
//
// As you complete each method's implementation, you will start toq
// see the tests pass.  As long as the implementation is not correct,
// the tests will continue to fail until the implementation is correct
//
// When a block of tests is all passing, edit the linkedList.tests.ts file
// and change the next sequential xdescribe block to a describe block
// which will activate the next series of tests.


import { ListNode } from './ListNode';

export class LinkedList {

    private head: ListNode = null;

    /**
     * Add the given data value to the beginning of the list.
     * @param value the data value to be contained in the new ListNode.
     * @returns the ListNode that was created, containing the given data value.
     */
    public addToHead(value: string): ListNode {

        // TODO
        return;
    }

    /**
     * Returns the 'head' node of the linked list.
     */
    public getHead(): ListNode {

        // TODO
        return;
    }

    /**
     * Returns the ListNode from the list at the given index.
     * @param index the index of the node, starting with the head at index 0.
     * @throws an error if the given index is invalid.
     */
    public get(index: number): ListNode {

        // TODO
        return;
    }

    /**
     * Returns an array containing the values contained in the list starting
     * with the head node. If there are no items in the list, then an empty
     * list is returned.
     */
    public values(): Array<string> {

        // TODO
        return;
    }
}