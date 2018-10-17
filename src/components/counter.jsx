import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  //   constructor(){
  //       super();
  //       this.handleIncrement = this.handleIncrement.bind(this); //since "this" keyword is defined here, you can perma bind it to use in a function

  //   styles = {
  //     fontSize: 50,
  //     fontWeight: "bold"
  //   };
  renderTags() {
    if (this.state.tags.length === 0) {
      return <p>GG NO RE, ARRAY IS EMPTY</p>;
    }

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li> // dynamically renders list by using map function, added key to uniquely identify elements.
          // only necessary to uniquely identify within a list
        ))}
      </ul>
    );
  }

  handleIncrement = product => {
    // arrow function, so that "this" is not redefined
    // console.log("WOW MUCH INCREMENT", this);
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })} //NOTE: passed reference instead of call for onClick -- PASSES ARGUMENT
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        {this.renderTags()}
      </div>
    );
  }

  //helper methods
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
