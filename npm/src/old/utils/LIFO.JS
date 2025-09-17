//LAST IN FIRST OUT.
class LIFO {
    constructor() {
        this._stack = [];
    }
    
    push(item) {
        this._stack.push(item);
    }
    
    pop() {
        return this._stack.pop();
    }
    
    peek() {
        return this._stack[this._stack.length - 1];
    }
    
    isEmpty() {
        return this._stack.length === 0;
    }
    
    getStack() {
        return this._stack;
    }
    }
    export default LIFO;