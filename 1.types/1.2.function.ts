{
  function add(a: number, b: number): number {
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
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName("Kim");
}

{
  //Default parameter
  function printMessage(message: string = "Default") {
    console.log(message);
  }
  printMessage();
}
{
  //Rest parameter 동일한 인자를 여러개 할당
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1));
  console.log(addNumbers(1, 2, 4, 5, 6));
}
