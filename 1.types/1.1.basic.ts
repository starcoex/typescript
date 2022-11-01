//number 숫자만 할당
const num: number = 0;

//string 문자열만 할당
const str: string = "Sring";

//boolean 참 거짓
const bool: boolean = true;

//undefined
let age: number | undefined;
age = 20;
age = undefined;
function find(): number | undefined {
  return undefined;
}

//null
let string: string | null;
string = "dkjfa";

// unKonwn 알수 없음
let notSure: unknown = 0;
notSure = "hi";
notSure = true;

// any 어떤 것
let anything: any = 0;
anything = "hello";

//void 리턴하지 않는 것
function print(): void {
  console.log("Hello");
}

//nerver 리턴하지 않는 데 에러를 던질때
function throwError(message: string): never {
  throw new Error(message);
}

//object 원시타입을 제외한 모든 타입을 할당 할수 있음
let obj: object = [];
function acceptSomeObject(obj: object) {}
acceptSomeObject({ name: "KKK" });
acceptSomeObject({ name: "KIIIIM" });
