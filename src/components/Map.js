import React,{Component} from  'react';

export default class Map extends Component{
    
    constructor(props){
    super(props)
    this.state={
    data:[ 
        {name: "sakthi",email:" sakthi@gmail.com" },
        {name: "aswin",email:" aswin@gmail.com" },
        {name: "vijay",email:" vijay@gmail.com" },
        {name: "vijay",email:" vijay@gmail.com" },
        {name: "vijay",email:" vijay@gmail.com" }

        ]
    } 

    }
render(){
        return(

         <div>
        <h1> list the values</h1>
         {this.state.data.map((sakthi)=>
        <div><h1>{sakthi.name} & {sakthi.email}</h1> </div>)


}
         </div>
        )
    }
}

