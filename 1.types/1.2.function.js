{
    function add(a, b) {
        return a + b;
    }
}
// {
//   // 에러 발생  'Promise' only refers to a type, but is being used as a value here. Do you need to change your target library?
//   function jsFetchNum(id: string): Promise<number> {
//     // code...
//     // code...
//     // code...
//     return new Promise((resolve, reject) => {
//       resolve(100);
//     });
//   }
// }
{
    //optional parameter
    function printName(firstName, lastName) {
        console.log(firstName);
        console.log(lastName);
    }
    printName("Kim");
}
{
    //Default parameter
    function printMessage(message) {
        if (message === void 0) { message = "Default"; }
        console.log(message);
    }
    printMessage();
}
{
    //Rest parameter 동일한 인자를 여러개 할당
    function addNumbers() {
        var numbers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            numbers[_i] = arguments[_i];
        }
        return numbers.reduce(function (a, b) { return a + b; });
    }
    console.log(addNumbers(1));
    console.log(addNumbers(1, 2, 4, 5, 6));
}
