import '../../stile/stile.css'
import { Link } from 'react-router-dom'



type Props = {
menu1: String;
menu2: String;
menu3: String;
menu4: String;
menu5: String;
menu6: String;

}

function Menu ( menu:Props ) {
   return (
      
    <div className= 'flexT'>  
<table>
          <thead className='thead td'>
             <tr>
                <td>< Link to={'/'}>{ menu.menu1 }</Link> </td>
                <td>< Link to={'/About'}>{ menu.menu2 } </Link> </td>
                <td>< Link to={'/ClassX '}>{ menu.menu3 }</Link> </td>
                <td>< Link to={'/Exp '}>{ menu.menu4 }</Link> </td>
                <td>< Link to={'/Rolld '}>{ menu.menu5 }</Link> </td>
                <td>< Link to={'/Contador '}>{ menu.menu6 }</Link> </td> 
             </tr>
           </thead>
</table>
</div>  
)     
}
export default Menu;

    
