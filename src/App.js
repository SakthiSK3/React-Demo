import React ,{Component} from 'react';
import Website  from './components/Project2/Website';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
//import Register from './components/Register';

library.add(fab, faCheckSquare, faCoffee);
//import Invoice from './components/Project/Invoice';
//import SimpleTable from './components/Project/SimpleTable';

class App extends Component{
render(){
 return(
          <div>
          < Website/>
          </div>
 )
}
}

export default App;
 