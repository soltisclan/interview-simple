"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedList_1 = require("./LinkedList");
const listNode_1 = require("./listNode");
describe('Class: LinkedList', () => {
    let linkedList;
    let firstNode;
    let secondNode;
    let thirdNode;
    describe('function: addToHead()', () => {
        describe('Given an empty list, when a value is added to head of the of the list, then it', () => {
            beforeEach(() => {
                linkedList = new LinkedList_1.LinkedList();
                firstNode = linkedList.addToHead('one');
            });
            it('should create and return a new ListNode that', () => {
                expect(firstNode).toBeInstanceOf(listNode_1.ListNode);
            });
            it('should have a value equal to the given value', () => {
                expect(firstNode.value).toEqual('one');
            });
            it('should point to null next node', () => {
                expect(firstNode.next).toBeNull();
            });
        });
        xdescribe('Given a populated list, when a value is added to head of the list, then it', () => {
            beforeEach(() => {
                linkedList = new LinkedList_1.LinkedList();
                thirdNode = linkedList.addToHead('three');
                secondNode = linkedList.addToHead('two');
                firstNode = linkedList.addToHead('one');
            });
            it('should create and return a new ListNode that', () => {
                expect(firstNode).toBeInstanceOf(listNode_1.ListNode);
            });
            it('should have a value equal to the given value', () => {
                expect(firstNode.value).toEqual('one');
            });
            it('should point to the previous head node', () => {
                expect(firstNode.next).toBe(secondNode);
            });
        });
    });
    xdescribe('function: getHead()', () => {
        describe('Given an empty list, when the head of the list is requested, then it', () => {
            beforeEach(() => {
                linkedList = new LinkedList_1.LinkedList();
            });
            skip('should return null', () => {
                expect(linkedList.getHead()).toBeNull();
            });
        });
        describe('Given a populated list, when the head of the list is requested, then it', () => {
            beforeEach(() => {
                linkedList = new LinkedList_1.LinkedList();
                secondNode = linkedList.addToHead('two');
                firstNode = linkedList.addToHead('one');
            });
            it('should return the head ListNode', () => {
                expect(linkedList.getHead()).toBeTruthy();
                expect(linkedList.getHead()).toBe(firstNode);
            });
        });
    });
    xdescribe('function: get()', () => {
        describe('Given an empty list, when a ListNode at a specific index is requested, then it', () => {
            beforeEach(() => {
                linkedList = new LinkedList_1.LinkedList();
            });
            it('should throw an error indicating the invalid index', () => {
                try {
                    linkedList.get(1);
                    fail('An error should have been thrown');
                }
                catch (err) {
                    expect(err.message).toEqual('Invalid index 1');
                }
            });
        });
        describe('Given a populated list, when a ListNode at a specific index is requested, then it', () => {
            beforeEach(() => {
                linkedList = new LinkedList_1.LinkedList();
                linkedList.addToHead('eight');
                linkedList.addToHead('seven');
                linkedList.addToHead('six');
                linkedList.addToHead('five');
                linkedList.addToHead('four');
                linkedList.addToHead('three');
                linkedList.addToHead('two');
                linkedList.addToHead('one');
            });
            it('should throw an error indicating the invalid index if it is less than zero', () => {
                try {
                    linkedList.get(-5);
                    fail('An error should have been thrown');
                }
                catch (err) {
                    expect(err.message).toEqual('Invalid index -5');
                }
            });
            it('should throw an error indicating the invalid index if it is greater than the length', () => {
                try {
                    linkedList.get(8);
                    fail('An error should have been thrown');
                }
                catch (err) {
                    expect(err.message).toEqual('Invalid index 8');
                }
            });
            it('should return the ListNode at the given index', () => {
                expect(linkedList.get(6).value).toEqual('seven');
            });
        });
    });
    xdescribe('function: values()', () => {
        describe('Given an empty list, when the list of node values is returned, then it', () => {
            beforeEach(() => {
                linkedList = new LinkedList_1.LinkedList();
            });
            it('should return an array', () => {
                expect(linkedList.values()).toBeInstanceOf(Array);
            });
            it('should return an empty array', () => {
                expect(linkedList.values().length).toEqual(0);
            });
        });
        describe('Given a populated list, when the list of node values is returned, then it', () => {
            beforeEach(() => {
                linkedList = new LinkedList_1.LinkedList();
                linkedList.addToHead('three');
                linkedList.addToHead('two');
                linkedList.addToHead('one');
            });
            it('should return an array', () => {
                expect(linkedList.values()).toBeInstanceOf(Array);
            });
            it('should return an array with the list items', () => {
                const values = linkedList.values();
                expect(values[0]).toEqual('one');
                expect(values[1]).toEqual('two');
                expect(values[2]).toEqual('three');
            });
        });
    });
});
//# sourceMappingURL=linkedList.test.js.map