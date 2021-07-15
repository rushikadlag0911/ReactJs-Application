import { thisExpression } from '@babel/types';
import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.value
    };

  //  constructor() { // instead of using this we can use arrow functions
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  // }

    handleIncrement = product => {
        console.log(product);
        this.setState({value: this.state.value + 1 });
    }

    doHandleIncrement = () => {
        this.handleIncrement({ id: 1});
    };

    render() {

       

        return ( 
         <div>
            
            <span className={this.getBadgeClasses()}>
                {this.formatCount()}
            </span>

            <button 
                onClick={() => this.handleIncrement({id : 1}) }
                className="btn btn-secondary btn-sm">Increment
            </button>
        
         </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.state;
        
        return value === 0 ? "Zero" : value;
    }
}
 
export default Counter;