import '../../stile/stile.css';
import Menu from '../menu'; 

type Props ={
divmap?: string;

}
function Cabeçalho(divmap:Props){

   return(
<div className='flexCabeça'>
  <div>
      <div><h1 className='Cabeçalho'>|Projeto Arma X|</h1>
      <Menu    menu1="Home"
               menu2="Lore"
               menu3="ClassX"
               menu4="Exp"
               menu5="Rolld"
               menu6="Contador"
      />
<div className='mapadivs'>
    {divmap.divmap}
</div>
      </div>
   </div>
</div>
 
   )
}

export default Cabeçalho;
