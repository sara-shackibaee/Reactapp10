import React, { Component } from 'react'
import momentJalaali from 'moment-jalaali';
import { Calendar } from 'react-datepicker2';
import Savedate from './Savedate'
class Dateshamsi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: momentJalaali(),
      isGregorian: true,
      status:false
    };
  }

  getCustomFormat(inputValue, isGregorian) {
    if (!inputValue)
      return '';
    const inputFormat = isGregorian ? 'YYYY/M/D' : 'jYYYY/jM/jD';
    return isGregorian ? inputValue.locale('es').format(inputFormat) :
      inputValue.locale('fa').format(inputFormat);
  }

  handelclick=()=>{
      this.setState({status:true})

  }
  render() {
    return <div>
      <Calendar
        value={this.state.value}
        isGregorian={this.state.isGregorian}
        onChange={value => { this.setState({ value }) }}
      />
      <br />
      <button
        onClick={() => this.setState({ isGregorian: !this.state.isGregorian })}>
        {this.state.isGregorian ? 'switch to shamsi' : 'switch to miladi'}
      </button>
      <br></br>
      <br></br>
      <br></br>
      <button onClick={this.handelclick}>save time for doctor</button>
      {this.state.status?<Savedate date={this.getCustomFormat(this.state.value, this.state.isGregorian)}/>:false}
    </div>
  }
};
export default Dateshamsi;