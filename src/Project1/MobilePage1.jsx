import React from "react";
class MobilePage1 extends React.Component {
  state = {
    AppArray: ["a", "b", "c", "d", "e", "f"],
  };

  CrateTable1 = () => {
    return (
      <tr>
        <td>app1</td>
        <td>app2</td>
        <td>app3</td>
        <td>app4</td>
      </tr>
    );
  };
  render() {
    return (
      <div>
        <h1>Mobile page 1 ....</h1>
        <table>
          <tbody>{this.CrateTable1()}</tbody>
        </table>
      </div>
    );
  }
}
export default MobilePage1;
