import React, { Component } from 'react';

class ChildComponent extends Component {
  render() {
    const { name, age, occupation } = this.props;
    return <div>
        <p>Student detail :</p>
        <hr />
        <table border ="10">
          <tr>
            <td>Name :</td>
            <td>{name}</td>
          </tr>
          <tr>
            <td>City :</td>
            <td>{age}</td>
          </tr>
          <tr>
            <td>College :</td>
            <td>{occupation}</td>
          </tr>
        </table>
    </div>;
  }
}

export default ChildComponent;
