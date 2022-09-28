import React from "react";

const App= ()=>{
  
const oblicznia = ()=>{
    
    let l1 = Number(document.getElementsByName("l1")[0].value);
    let l2 =  Number(document.getElementsByName("l2")[0].value);
    let o =  document.getElementsByName("o")[0].value;
    var w = 0;

    if(l1==0 && o=="/"||l2==0 && o=="/"){
      w="Nie dziel przez zero"
    }
    else{

    switch (o){
      case "+":
        w = l1+l2;
        break;
      case "-":
        w = l1+l2;
        break;
      case "/":
        w = l1+l2;
        break;
      case "*":
        w = l1*l2;
        break;
      
    }
  }
    
    console.log("w")

    document.getElementsByName('p')[0].insertAdjacentText("afterend",w)
    return ;
}

return(

<div>

  <form onSubmit={(e)=>oblicznia}>

    <input name="l1" id="l1" type="number"/>
    <select name="o" id="o">
      <option>+</option>
      <option>-</option>
      <option>/</option>
      <option>*</option>
    </select>
    <input name="l2" id="l2" type="number"/>
    
  </form>
  <button type="button" onClick={oblicznia}>Oblicz</button>
  
  <p name="p" id="p">w</p>

</div>

);


}

export default App;
