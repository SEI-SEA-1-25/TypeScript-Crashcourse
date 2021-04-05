console.clear()
let helloTs: string = 'hello Typescript'

// console.log(helloTs)

let boolyBoi: boolean = true
let countyBoi: number = 10

boolyBoi = false

// will throw an error
// boolyBoi = 10

countyBoi++
countyBoi *= 10

console.log(countyBoi)

// any type is like swiss army knife
let swissyBoi: any = 'string'

swissyBoi = 10

// type inference
let stringy = 'hello' // infered to be a string
// wil lthrow and error
// stringy = 10
let booly = true
// will throw and error
// booly = 'string'

// union -- more than one type in a var
let united: string | number 

united = 10
united = 'string'
// united = true

// this is what unions for good for
let myString: string | null
myString = null

// arrays in ts -- only hold one data type

let numList: number[] = [1, 3, 5]
// generic way
let generic: Array<string> = ['hello']

let numString: (string | number)[] = ['string', 1]

// mulitdimension array
let multiverse: number[][] = [
  [1, 2, 4],
  [4, 5, 6]
]

// create your own type
type stringOrNumber = string | number

let num: stringOrNumber = 10

// lets write a function
function compliment(person: string): string {
  return `i like your haircut ${person}. Lookin Spiffy!`
}

console.log(compliment('henry'))

function complimentMany(people: string[]): void {
  // in callbacks will use type inference
  people.forEach(person => {
    console.log(`hey ${person}, nice pair of shoes!`)
  })
}

// interfaces -- sort of like object factories

interface Person {
  // readonly means can't be changed 
  readonly name: string,
  // ? means optional
  age?: number,
  // functionName(): returnValue
  sayCatchPhrase(): void
}

// to use an interface -- it is like a type
const typeScriptLover: Person = { 
  name: 'Weston',
  sayCatchPhrase: () => console.log('sick.')
}

typeScriptLover.sayCatchPhrase()

typeScriptLover.age = 10 // at heart
// typeScriptLover.name = 'new name'

// tuples -- is an array of fixed length
let twople: [string, number] = ['hello', 10]
// this throw an error
// twople = [13, 'oh no! error!']

// Enums
enum Color { Green, Red, Blue }
let colorChoice: Color = Color.Green