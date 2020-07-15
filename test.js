import React from 'react';
import Myprops from './Class3';
import Arrrayexmp from './Class4/Class4';

class Examp extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            fnum:0,
        snum:0,
        res:0,
        twiceofsum:0,
        resarr:[]
        }

    }
    handel=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    add=()=>{
        
        
        this.setState({
            res:parseInt(this.state.fnum)+parseInt(this.state.snum),
        fnum:0,
        snum:0,
        
        
        },function(){
            var k=this.state.resarr;
        k.push(this.state.res);
            this.setState({
            twiceofsum:this.state.res*2,
            resarr:k
            })

        }); 
        
    }
    sub=()=>{
        
        this.setState({
            res:parseInt(this.state.fnum)-parseInt(this.state.snum)
        },function(){
            var k=this.state.resarr;
            k.push(this.state.res);
            this.setState({
                resarr:k
            })

        }); 
    }
    mul=()=>{
        
        this.setState({
            res:parseInt(this.state.fnum)*parseInt(this.state.snum)
        },function(){
            var k=this.state.resarr;
            k.push(this.state.res);
            this.setState({
                resarr:k
            })
        }); 
    }
render(){
    return(
        <div >
            
                ENTER FIRST NUBMER:<br/>
                    <input type="text" name="fnum" value={this.state.fnum} onChange={this.handel} placeholder="Enter Your First Number" autoComplete="off"/>
                    <br/>
                
                ENTER SECOND NUMBER:<br/>
                    <input type="text"  name="snum" value={this.state.snum} onChange={this.handel} placeholder="Enter Your Second Number" autoComplete="off" /><br/><br/>
                
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
            <br/>
            <h1 style={{color:'red'}}>ALL RESULT IN ARRAY={this.state.resarr.toString()}</h1>
            <br/>
            TWICE OF NO IS={this.state.twiceofsum}
            <Myprops vala={this.state.fnum}
            valb={this.state.snum}
            
            />
        <Arrrayexmp/>
        </div>
    )
}
}
export default Examp;
