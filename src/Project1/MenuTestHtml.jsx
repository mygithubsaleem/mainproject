import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/react-fontawesome";



const navbarStyle={
backgroundColor:"yellow",
color: "red",
padding: "5px",
fontFamily: "Sans-Serif",
outerHeight:"5",
outerWidth:"9"

}
class MenuTestHtml extends React.Component{
render(){

    return(
      
<div> <h1>PR Nav Bar...is not working properly...</h1>



    <>
<div class="navbar" style={navbarStyle}>
            <ul>
       <li class="dropdown">

          <a href="javascript:void(0)" class="dropbtn" >About Us</a>
        <div class="dropdown-content">
          <hh1></hh1>
<a herf="#">Welcome</a>
<a href="#">History</a>
<a href="#">The board of Director</a>
<a href="#">Employement</a>
<a href="#">Community</a>
<a href="#">Photo Gallery</a>
<a href="#">Policies</a>
        </div>
        </li>
        <li class="dropdown">
          <a href="javascript:void(0)" class="dropbtn">Education</a>
        <div class="dropdown-content">
<a href="#">Middle</a>
<a href="#">Matric</a>
<a href="#">Inter</a>
        </div>
        </li>
        <li class="dropdown">
          <a href="javascript:void(0)" class="dropbtn"  >Admission</a>
          <div class="dropdown-content">
            <a href="#">Admission Policy</a>
            <a href="#">Fees</a>
            <a href="#">Uniform</a>
            <a href="#">Admission Form</a>
          </div>
        </li>
        <li class="dropdown">
          <a href="#" class="dropbtn" >Campuses</a>
          <div class="dropdown-content">
            <a href="#">Lahore</a>
            <a href="#">Karachi</a>
            <a href="#">Sukkar</a>
          </div>
        </li>
        <li class="dropdown">
          <a href="#" class="dropbtn">News</a>
          <div class="dropdown-content">
            <a href="#">Student Community</a>
            <a href="#">FAQ</a>
          </div>
        </li>
        <li class="dropdown">
          <a href="#" class="dropbtn" >Contact Us</a>
          <div class="dropdown-content">
            <a href="#">Maps</a>
            <a href="#">Phones & Addresses</a>
          </div>
        </li>
        <li class="dropdown">
          <a href="#" class="dropbtn" >Student Life</a>
          <div class="dropdown-content">
            <a href="#">Extra Curriculum Activities</a>
            <a href="#">Field Trips</a>
            <a href="#"> Year Book</a>
          </div>
        </li>
      </ul>
      
     
    </div>
    </>
    

</div>
    )
}


}
export default MenuTestHtml;