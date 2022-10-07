import React, { useState } from "react";



const App = () => {

// state
    const state = useState();
    const [count, setCount]=useState(0);


    // increase;
    const IncNum = () => {
        setCount(count + 1 );  
        console.log('buttone been clicked' + count++);
    }
    // decrese;
    const DesNum = () => {
        setCount(count - 1 );  
        console.log('buttone been clicked' + count--);
    }
    const Reset = () => {
        setCount(0);  
        console.log('buttone been clicked');
    }
// array distructuring


    return (
        <>
            <h1>{count}</h1>
            <br/>
            <br/>

            <button onClick={IncNum}>Increase ⮝</button>
            <br/>
            <button onClick={DesNum}>Decrease ⮟</button>
            <br/>
            <button className="reset" onClick={Reset}>✗reset✗</button>
        </>
    );

};
export default App;;
