function List(props){
   

    return(
        <div>
            <h3>{props.header}</h3>
            {/* <input type="text" placeholder="enter your name" onChange={props.takeVal}/>
            <button onClick={props.addItem}>addItem</button> */}
            <input type="text" placeholder="enter data" onChange={props.handleChange} readOnly={props.val}/>
            <button onClick={props.addItem}>addItem</button> 
        <ul>
            {
                props.data.map(function(d){
                   return(<li key={d}>{d}</li>)
                })
            }
        </ul>
        </div>
    )


}
export default List;