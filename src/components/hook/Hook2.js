import { useState } from "react";


export default function Hook2() {
    const [a,setA] = useState("")
    const [b,setB] = useState("")
    const [res,setRes] = useState(0)
    return (
        <div>
            <div>
                <layer>Số a:</layer>
                <input type="number" value={a} onChange={(e)=>setA(e.target.value*1)}></input><br/>
                <layer>Số b:</layer>
                <input type="number" value={b} onChange={(e)=>setB(e.target.value*1)}></input>
            </div>
            <div>
                <button onClick={()=>setRes(a+b)}>+</button>
                <button onClick={()=>setRes(a-b)}>-</button>
                <button onClick={()=>setRes(a*b)}>*</button>
                <button onClick={()=>setRes((a/b).toFixed(2))}>/</button><br/>
                <button>Result: {res}</button>
            </div>
        </div>
    );
}
