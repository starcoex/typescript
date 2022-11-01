//number 숫자만 할당
var num = 0;
//string 문자열만 할당
var str = "Sring";
//boolean 참 거짓
var bool = true;
//undefined
var age;
age = 20;
age = undefined;
function find() {
    return undefined;
}
//null
var string;
string = "dkjfa";
// unKonwn 알수 없음
var notSure = 0;
notSure = "hi";
notSure = true;
// any 어떤 것
var anything = 0;
anything = "hello";
//void 리턴하지 않는 것
function print() {
    console.log("Hello");
}
//nerver 리턴하지 않는 데 에러를 던질때
function throwError(message) {
    throw new Error(message);
}
//object 원시타입을 제외한 모든 타입을 할당 할수 있음
var obj = [];
function acceptSomeObject(obj) { }
acceptSomeObject({ name: "KKK" });
acceptSomeObject({ name: "KIIIIM" });
