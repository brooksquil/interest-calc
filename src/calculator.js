import { Component } from 'react';

class Calculator extends Component {
constructor(props) {
super(props);
this.state = {
count: 0,
principal: 0,
rate: 10,
years: 0,
calculated: 0
};
this.handlePrincipalChange = this.handlePricipalChange.bind(this)
this.handleRateChange = this.handleRateChange.bind(this)
this.handleYearChange = this.handleYearChange.bind(this)
this.calculate = this.calculate.bind(this);
};
handlePrincipalChange = (e) => {
let value = parseInt(e.target.value);
this.setState({ principal: value })
}
handleRateChange = (e) => {
let value = parseInt(e.target.value);
this.setState({ rate: value })
}
handleYearChange = (e) => {
let value = parseInt(e.target.value);
this.setState({ years: value })
}
calculate = () => {
let count = 0;
let principal = parseInt(this.state.principal);
let rate = parseInt(this.state.rate)/100;
let years = parseInt(this.state.years);
count = principal * (1 + (rate * years));

this.setState({
calculated: count
})
}
render() {
return(
<div className="calculator">
<h1>Compound Interest Calculator</h1>
<label>
Principal
</label><br/>
$ <input onChange={ this.handlePrincipalChange } value={ this.state.principal }></input><br/><br/>
<label>
Interest Rate
</label><br/>
% <input onChange={ this.handleRateChange } value={ this.state.rate }></input><br/><br/>
<label>
Years
</label><br/>
$ <input onChange={ this.handleYearChange } value={ this.state.years }></input><br/><br/>
<button onClick={ this.calculate }>
Calculate
</button>
<h1>
Total with compounded interest: { this.state.calculated === 0 ? "" : this.state.calculated }
</h1>
</div>
)
}
}
export default Calculator;