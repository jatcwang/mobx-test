
declare var window: any
window.doLog = true

export function logg(str: string) {
  if (window.doLog) {
    console.log(str)
  }
}

// patch SCU to print msg
// export function patchShouldComponentUpdate(obj: any, doStuff: (nextProps: any, nextState: any) => void): any {
//   let origSCU = obj.prototype.shouldComponentUpdate
//   if (origSCU) {
//     obj.prototype.shouldComponentUpdate = (...args: any[]) => {
//       doStuff(args[0], args[1])
//       return origSCU(args)
//     }
//   }
//   return obj
// }
