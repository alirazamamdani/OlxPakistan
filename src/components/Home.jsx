import React , {useEffect, useState} from 'react';
import AddItem from './AddItem';

function Home(){
  const [list , setlist] = useState([]);
  const [loading , setloading] = useState(true);
     
  useEffect(()=>{
    if(loading) {
      let _list = []
      for(let i = 0; i < 12; i++){
        _list.push(<AddItem placeholder={true}/>);
      }
      
      setlist(_list);
  }
}, list);
        
        return(
          <div className="home-page flex">
            {list}
          </div>    
      )
    } 

 export default Home;