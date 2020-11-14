import React , {useEffect, useState} from 'react';
import AddItem from './AddItem';

function Home(){
  const [list , setlist] = useState([]);
  const [loading , setloading] = useState(true);
     
  useEffect(()=>{
    if(loading) {
      let _list = []
      for(let i = 0; i < 16; i++){
        _list.push(<AddItem placeholder={true}/>);
      }
      
      setlist(_list);
  }
}, list);
        
        return(
          <div className="home-page ">
              <div className="ad-list flex">
                  {list}
              </div>
              <button className="load-more font3 color anim s18">
                <p>Load More</p>
              </button>
          </div>
             
          
      )
    } 

 export default Home;