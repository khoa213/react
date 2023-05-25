import { useEffect, useState } from "react";
import { styled } from 'styled-components';
const CountNumber = styled.span`
  color: ${props => props.count>5? "white" : "red"};  
`;
export const Counter2 = ({name}) => {
    const [count,setCount] = useState(0);
    const [loading, setLoading] = useState(true);
     
    
    const onDecrease = () => {
        setCount(count - 1);
    }
    const onIncrease = () => {
        setCount(count + 1);
    }
    return (
        <div>   
            <h1>Hello {name}</h1>
            
                <button onClick={()=> onDecrease()}>-</button>
                <CountNumber count={count}>{count}</CountNumber>
                <button onClick={() =>onIncrease()}>+</button>
            </div>
    )
}