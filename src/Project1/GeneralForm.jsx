import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown } from "react-bootstrap";
// import { menu, Col } from "react-bootstrap";
class GeneralForm extends React.Component {
  state = {
    image: "",
  };
  handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    console.log(URL.createObjectURL(event.target.files[0]));
    this.setState({ image: URL.createObjectURL(event.target.files[0]) });
  };

  render() {
    return (
      <div>
        <h2>My General Form</h2>
        <h1>
          Example heading <badge>New</badge>
        </h1>
        <h2>
          Example heading <badge>New</badge>
        </h2>
        <h3>
          Example heading <badge>New</badge>
        </h3>
        <button href="#">Link</button> <button type="submit">button</button>{" "}
        <button type="button" value="Input">
          Input
        </button>{" "}
        <button type="submit" value="Submit">
          Submit
        </button>{" "}
        <button type="reset" value="Reset">
          Reset
        </button>
        <br />
        <br />
        <input type="file" accept="image/*" onChange={this.handleImageUpload} />
        <div>
          <img
            src={this.state.image}
            style={{
              width: "15%",
              height: "15%",
              position: "absolute",
            }}
          />
        </div>
        <br />
        <br />
        <br />
        <div>
          <h1>Shopping List for </h1>
          <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Oculus</li>
          </ul>
        </div>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {/* <menubar>
          <menu>
            <menuitem>action</menuitem>
          </menu>
        </menubar> */}
      </div>
    );
  }
}
export default GeneralForm;
