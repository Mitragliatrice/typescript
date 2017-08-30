// Boolean
let paidAccount: boolean = false;

// Number
let age: number = 33;
var taxRate: number = 7.5;

// String
var fulName : string = "Colton Mathews"

// Array
var ages: number[] = [33, 28, 11];

// Tuple
let player: [number, string]; 
player = [3, 'Corerra'];

// Enum
enum ApprovalStatus { Approved, Pending, Rejected };
let job: ApprovalStatus = ApprovalStatus.Pending;

// Any
var apiData: any[] = [123, "Colton", true];

// Void
function printOut(msg: string) : void {
  console.log(msg);
}