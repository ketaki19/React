import React, { useEffect, useState } from "react";

const App2 = () =>{
    const[num, setNum] = useState(0);
    
    useEffect(()=>{
        alert('I am clicked')
    }, []);
    
    
return(
   <button onClick ={() =>{
       setNum(num +1);
    } 
    }
    >
        Click here{num}
    </button>
    );
};
export default App2;