import { BaseOp } from './models/ops'

export class Core {
  constructor() {}
  
  process(op: BaseOp) {
    console.log('asdf')

    let op2 = new BaseOp()

    console.log(op2.constructor)
    console.log(op2.constructor)
    

    // hello

    // Insert[0, "heloo"]
    // Delete[5, 3]
    // Insert[2, "llo"]


    // OperationContainer.push(op2)
    // OperationContainer.push(opwhatever)

    // OperationContainer.sync()


    // ignore
    return 2
  }
}
