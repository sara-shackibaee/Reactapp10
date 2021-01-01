import React, { Component } from 'react'
// import   Dateshamsi from './Dateshamsi'
export default class Timeclock extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            year:1990,
            month:'jun',
            day :'mon',
            statusdate:false,
            statustime:false,
            hour:12,
            Minute:1,
            second:1

        }
    }


    clickhandel =()=>{
        console.log("kkkkkkkkkkkk")
        let newDate = new Date()
        this.setState({
            year: newDate.getFullYear(),
            month:newDate.getMonth() + 1,
            day :newDate.getDay(),
           
            statusdate:true

        })}


    clickhandel1 =()=>{
            console.log("kkkkkkkkkkkk")
            let newDate = new Date()
            this.setState({
                
                hour:newDate.getHours(),
                Minute:newDate.getMinutes(),
                second:newDate.getSeconds(),
                statustime:true
    
            })
    
    }
    

    render() {
        return (
            <div style={{width:450,height:400}}>
                
                <button onClick={this.clickhandel}>current-date</button>
                {this.state.statusdate?<div style={{backgroundColor:'yellow',width:450,height:50,textAlign:'center'}}>{`current date is year ${this.state.year} ....and month ${this.state.month}......and day ${this.state.day} `}</div>:false}
                <br></br>
                
                <button onClick={this.clickhandel1}>current-time</button>
             {this.state.statustime?<div style={{backgroundColor:'green',width:450,height:50,textAlign:'center'}}>{`current time is hour ${this.state.hour} ....and Minute ${this.state.Minute}......and second ${this.state.second} `}</div>:false}
                
             
            

            </div>
        )
    }
}
