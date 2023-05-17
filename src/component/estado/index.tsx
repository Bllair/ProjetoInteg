import { useState } from "react";


function Estado(){

const [numero, setNumero] = useState(0);

function handleClickMenos()
{
     setNumero(numero - 5);  
}
function handleClickMais()
{
     setNumero(numero + 5);
     
}

return(
<div>
    <h3> O Valor é: {numero} </h3>
    <br/>
   <button onClick= { handleClickMenos }> Diminuir </button>
   <button onClick= { handleClickMais }> Somar </button>
</div>

    )
}
export default Estado;