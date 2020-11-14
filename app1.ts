interface parsev2{
    name: string;
   }
  
   interface str{
     firstname: string;
     lastname: string;
     clientId: number;
   }
   
  function sayName(o: parsev2) {
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
    console.log(cI);
  
  //convert string to Json and display in console
    const obj= {
      firstName: fN2,
      lastName: lN2,
      clientId: cI
    };
    const data = JSON.stringify(obj);
    console.log(data);
    // {"firstName":["JOHN"],"lastName":["MICHAEL"],"clientId":"9994567"}
  }
   
  const v2p = {
      name:"JOHN0000MICHAEL0009994567"
  }
  
  
  sayName(v2p);
  


