import React, { Component } from "react";

import axios from "axios";

export default class Budget extends Component {
  constructor(props) {
    super(props);
    this.state = {
    budget:[],
    };
    this.loadBudget = this.loadBudget.bind(this);
  }

  componentWillMount() {
    this.loadBudget();
  }

  async loadBudget()
  {
    const promise = await axios.get("http://localhost:3000/budget");
    const status = promise.status;
    if(status===200)
    {
      const data = promise.data;
      this.setState({budget:data});
    }
  }

  render() {
    return(
      <div>
        <h1>Budget</h1>
            {this.state.budget.map((value,index)=>{return <h4 key={index}>{value}</h4>})}
      </div>
    )
  }
}