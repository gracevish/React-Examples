import React,{useState} from 'react';
import List from './List';

function Home(){
    const [data,setData]=useState('');
    const[val,setVal]=useState(true);
    const [tempval,settempVal]=useState('');
    const [seasons,setSeasons]=useState(['M','N','D','O','K']);
    const handleChange=(e)=>{
        settempVal(e.target.value);
    }
    const addItem=()=>{
        let d=[...seasons];
        d.push(tempval);
        setSeasons(d);
      }
    return(
        <div>
          {/* <input type="text" placeholder="enter data" onChange={handleChange} readOnly={val}/> */}
          <button onClick={()=>setVal(!val)}>{val? 'Enable':'Disable'}</button>
          <List data={seasons} handleChange={handleChange} addItem={addItem} val={val}/>
        </div>
    )
}
export default Home;