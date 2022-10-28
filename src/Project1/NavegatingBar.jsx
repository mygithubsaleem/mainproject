import React from "react";
import { Menu, Menuitem, Button } from "react-bootstrap";

class NavegatingBar extends React.Component {
  state = {
    sideBarItems: ["Google", "YouTube"],
    sideBarWidth: "10%",
    sideBarHeight: "0%",
    value: this.props.showBtnHandler,
  };
  openSideBar = () => {
    console.log("side bar open working.....");
    // this.setState({ sideBarWidth:10% });
  };
  closeSideBar = () => {
    console.log("side bar close working..");
    this.setState({ sideBarHeight: "0%" });
  };
  render() {
    return (
      <div>
        
        <>
          <div>
            <>
              <Button
                onClick={() => {
                  this.openSideBar();
                }}
              >
                =
              </Button>
              <p
                style={{
                  width: "15%",
                  height: "15%",
                  backgroundColor: "yellow",
                }}
              >
                google
                {
                  <Button
                    onClick={() => {
                      this.closeSideBar();
                    }}
                    width="1%"
                    height="1%"
                  >
                    X
                  </Button>
                }
                <br />
                youtube
                <br /> facebook <br />
                twiter
              </p>
            </>
            <nav
              className="navbar navbar-light bg-light"
              style={{ backgroundColor: "yellow" }}
            >
              <a className="navbar-brand" href="#">
                Home
              </a>
              <a href="#">Game</a>
              <a href="#">ToDoList</a>
              <a href="#">EyePassWordBox</a>
              <a href="#">TogImmage</a>
              <a href="#">ImmageUpLoad</a>
              <a href={"./Calulator"}>Calculator</a>
              <a href="#">LogIn</a>
              <a href={"http://google.com"}>Google</a>
            </nav>
          </div>
        </>

        <>
          <ul>
            {this.state.sideBarItems.map((items, itemIndex) => (
              <li>{items}</li>
            ))}
          </ul>
        </>
        <>
          <Button className="m-2" variant="primary">
            Home
          </Button>
          <Button
            className="m-2"
            onClick={() => {
              this.props.showElement(() => {
                this.props.showBtnHandler(5);
              });
            }}
          >
            LogIn
          </Button>
          <Button className="m-2">Game</Button>
          <Button className="m-2">TogImmage</Button>
          <Button className="m-2">PassWordBox</Button>
          <Button className="m-2">ImmageUpLoad</Button>
        </>
        <>
          <br />
          <a href={"http://google.com"}>Google</a>
          <br />
          <a href={"http://youtube.com"}>YouTube</a>
          <br />
          <a href={"http://faceBook.com"}>Facebook</a>
          <br />
          <a href={"http://amazone.com"}>amazone</a>
          <br />
          <a href={"http://instagram.com"}>Instagram</a>
          <br />
        </>
        <span></span>
      </div>
    );
  }
}

export default NavegatingBar;
