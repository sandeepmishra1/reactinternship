import React from 'react';
import { render } from '@testing-library/react';
class Examp extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            fnum:0,
        snum:0,
        res:0
        }

    }
    handel=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    add=()=>{
        
        this.setState({
            res:parseInt(this.state.fnum)+parseInt(this.state.snum)
        }); 
    }
    sub=()=>{
        
        this.setState({
            res:parseInt(this.state.fnum)-parseInt(this.state.snum)
        }); 
    }
    mul=()=>{
        
        this.setState({
            res:parseInt(this.state.fnum)*parseInt(this.state.snum)
        }); 
    }
render(){
    return(
        <div >
            
                ENTER FIRST NUBMER:<br/>
                    <input type="text" name="fnum" onChange={this.handel} placeholder="Enter Your First Number"/>
                    <br/>
                
                ENTER SECOND NUMBER:<br/>
                    <input type="text"  name="snum" onChange={this.handel} placeholder="Enter Your Second Number"/><br/><br/>
                
                <button onClick={this.add}>ADDITION</button>&nbsp;&nbsp;
                
                <button onClick={this.sub}>SUBSTRACTION</button>&nbsp;&nbsp;
                
                <button onClick={this.mul}>MULTIPLICATION</button>
                <br/>
                <br/>
            FIRST NUMBER VALUE={this.state.fnum}
            <br/>
            SECOND NUMBER VALUE={this.state.snum}
            <br/>
            RESULT={this.state.res}
        </div>
    )
}
}
export default Examp;