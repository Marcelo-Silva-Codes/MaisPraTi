class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class StackLinked{
    constructor(){
        this.top = null
        this.size = 0
    }

    push(value){
        let newNode = new Node(value)
        newNode.next = this.top
        this.top = newNode
        this.size++
    }

    pop(){
        if(!this.top) return null
        let poppedValue = this.top.value
        this.top = this.top.next
        this.size--
        return poppedValue
    }

    peek(){
        return this.top ? this.top.value : null
    }
}


let pilha = new StackLinked()

pilha.push(30)


