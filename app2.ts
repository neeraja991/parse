//Typescript code
interface parsev1{
  name: string;
 }

 interface str{
   firstname: string;
   lastname: string;
   clientId: number;
 }
 
function sayName(o: parsev1) {
  var str = "JOHN0000MICHAEL0009994567"; 
  var fN = str.substring(0, 8);
  var fN1 = fN.split("0");
  var fN2 = fN1.splice(0, 1); 
  console.log(fN2);
  var lN = str.substring(8, 18); 
  var lN1 = lN.split("0");
  var lN2 = lN1.splice(0, 1); 
  console.log(lN2);
  var cI = str.substring(18,25);
  var cI3 = cI.slice(0, 3);
  var cI4 = cI.slice(3, 7);
  cI3 = cI3 + "-" + cI4;
  console.log(cI3);

//convert string to Json and display in console
  const obj= {
    firstName: fN2,
    lastName: lN2,
    clientId: cI3
  };
  const data = JSON.stringify(obj);
  console.log(data);
  // {"firstName":["JOHN"],"lastName":["MICHAEL"],"clientId":"999-4567"}
}
 
const v1p = {
    name:"JOHN0000MICHAEL0009994567"
}


sayName(v1p);

