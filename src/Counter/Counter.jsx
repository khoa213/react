import React from "react";
import { styled } from 'styled-components';
const CountNumber = styled.span`
  color  : ${props => props.count>5 ? "pink" : "red"} ;
`;
class Counter extends React.Component {
    constructor (props) {
        super(props);
        this.state = {count:0};
    }
    onDecrease () {
         this.setState({count:this.state.count-1});
    }
    onIncrease () {
        this.setState({count:this.state.count+1});
    }
    componentWillMount () {
        console.log("will mount");
    }
    componentDidMount() {
        console.log("did mount");
    }
    
    render () {
        console.log("render");
        return (
            <div>
                
                <button onClick={() =>this.onDecrease()}>-</button>
                <CountNumber count={this.state.count}>{this.state.count}</CountNumber>
                <button onClick={() => this.onIncrease()}>+</button>
            </div>
        )
    }
}
export {Counter};