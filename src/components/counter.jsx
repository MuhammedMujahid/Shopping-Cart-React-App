import React, { Component } from "react";

class Counter extends Component {
  //   state = {
  //     value: this.props.counter.value,
  //     tags: ["tag1", "tag2", "tag3"]
  //   };

  //   constructor(){
  //       super();
  //       this.handleIncrement = this.handleIncrement.bind(this); //since "this" keyword is defined here, you can perma bind it to use in a function

  //   styles = {
  //     fontSize: 50,
  //     fontWeight: "bold"
  //   };
  //   renderTags() {
  //     if (this.state.tags.length === 0) {
  //       return <p>GG NO RE, ARRAY IS EMPTY</p>;
  //     }

  //     // return (
  //     //   <ul>
  //     //     {this.state.tags.map(tag => (
  //     //       <li key={tag}>{tag}</li> // dynamically renders list by using map function, added key to uniquely identify elements.
  //     //       // only necessary to uniquely identify within a list
  //     //     ))}
  //     //   </ul>
  //     // );
  //   }

  //   handleIncrement = product => {
  //     // arrow function, so that "this" is not redefined
  //     // console.log("WOW MUCH INCREMENT", this);
  //     console.log(product);
  //     this.setState({ value: this.state.value + 1 });
  //   };
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)} //NOTE: passed reference instead of call for onClick -- PASSES ARGUMENT
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.delete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>

        {/* {this.renderTags()} */}
      </div>
    );
  }

  //helper methods
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
