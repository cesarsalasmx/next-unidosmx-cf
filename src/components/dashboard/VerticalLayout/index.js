import React, { Component } from "react"
import Router from 'next/router';
import decode from 'jwt-decode';
// import { withRouter } from "react-router-dom"
// import {
//   changeLayout,
//   changeSidebarTheme,
//   changeSidebarType,
//   changeTopbarTheme,
//   changeLayoutWidth,
// } from "../../store/actions"

// Layout Related Components
import dynamic from "next/dynamic";

const Header = dynamic(() => import("./Header"), { ssr: false}); 
const Sidebar = dynamic(() => import("./Sidebar"), {ssr:false});
import Rightbar from "../CommonForBoth/Rightbar"

class Layout extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      isMobile: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent),
    }
    console.log(props)
    this.toggleMenuCallback = this.toggleMenuCallback.bind(this)
  }

  capitalizeFirstLetter = string => {
    return string.charAt(1).toUpperCase() + string.slice(2)
  }

  componentDidMount() {

    if (this.props.leftSideBarTheme) {
      this.props.changeSidebarTheme(this.props.leftSideBarTheme)
    }

    if (this.props.layoutWidth) {
      this.props.changeLayoutWidth(this.props.layoutWidth)
    }

    if (this.props.leftSideBarType) {
      this.props.changeSidebarType(this.props.leftSideBarType)
    }
    if (this.props.topbarTheme) {
      this.props.changeTopbarTheme(this.props.topbarTheme)
    }
  }
  toggleMenuCallback = () => {
    if (this.props.leftSideBarType === "default") {
      this.props.changeSidebarType("condensed", this.state.isMobile)
    } else if (this.props.leftSideBarType === "condensed") {
      this.props.changeSidebarType("default", this.state.isMobile)
    }
  }
  
  
  render() {
    const isAuthenticated = ()=>{
      const token = localStorage.getItem('token')
      let isValid = true
      try{
        isValid = decode(token);
      }catch(e){
        isValid = false;
      }
      return isValid;
    };
    if(isAuthenticated()){
      return (
        
        <React.Fragment>
          <div id="layout-wrapper">
            <Header toggleMenuCallback={this.toggleMenuCallback} />
            <Sidebar
              theme={this.props.leftSideBarTheme}
              type={this.props.leftSideBarType}
              isMobile={this.state.isMobile}
            />
            <div className="main-content">{this.props.children}</div>
          
          </div>
          {this.props.showRightSidebar ? <Rightbar /> : null}
        </React.Fragment>
      )
    }else{
      return(Router.push('/'))
    }
    
  }
}
export default Layout;
