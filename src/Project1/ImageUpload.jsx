import React from "react";
class ImageUpload extends React.Component {
  state = {
    image: "",
  };
  // handleImageUpload = (event) => {
  //   this.setState({ image: URL.createObjectURL(event.target.files[0]) });
  // };

  render() {
    return (
      <div>
        {/* <input type="file" onChange={this.handleImageUpload} /> */}
        <input
          type="file"
          onChange={(e) => {
            this.setState({ image: URL.createObjectURL(e.target.files[0]) });
          }}
        />
        <img
          src={this.state.image}
          style={{
            width: "50%",
            height: "50%",
            position: "absolute left",
          }}
        />
      </div>
    );
  }
}
export default ImageUpload;
