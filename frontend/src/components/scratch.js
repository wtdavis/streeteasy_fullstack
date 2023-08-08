class Montero {
    constructor(status) {
        this.status = status
    }

    addStatus (num) {
        this.status += num
        console.log(this.status)
    }
}

let bb = new Montero(4)
console.log(bb)
bb.addStatus(4)
cc.addStatus(4)