import PropTypes from "prop-types"
import React, { useRef } from "react"

// //Import Scrollbar
import SimpleBar from "simplebar-react"

// MetisMenu

import { Link } from "next/router";


const SidebarContent = (props) => {
  const ref = useRef()
  // Use ComponentDidMount and ComponentDidUpdate method symultaniously
  
  return (
    <React.Fragment>
      <SimpleBar style={{ maxHeight: "100%" }} ref={ref}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title">Menú </li>
            <li>
              <Link href="/dashboard" className="waves-effect">
                <a><i className="ti-home"></i>
                <span className="badge rounded-pill bg-primary float-end">2</span>
                <span>General</span></a>
              </Link>
            </li>

            <li>
              <Link href="/calendar" className=" waves-effect">
                <a>
                  <i className="ti-calendar"></i>
                  <span>Donaciones</span>
                </a>
              </Link>
            </li>

            <li>
              <Link href="/#" className="has-arrow waves-effect">
                <a>
                  <i className="ti-email"></i>
                  <span>Proyectos</span>
                </a> 
              </Link>
            </li>

            <li className="menu-title">Tráfico</li>

            <li>
              <Link href="/#" className="has-arrow waves-effect">
                <a>
                  <i className="ti-package"></i>
                  <span>Audiencia</span>
                </a> 
              </Link>
            </li>
            <li>
              <Link href="/#" className="waves-effect">
                <a>
                  <i className="ti-receipt"></i>
                  <span>Usuarios</span>
                </a> 
              </Link>
            </li>
            <li>
              <Link href="/#" className="waves-effect">
                <a>
                  <i className="ti-receipt"></i>
                  <span>Dispositivos</span>
                </a> 
              </Link>
            </li>
            <li>
              <Link href="/#" className="waves-effect">
                <a>
                  <i className="ti-receipt"></i>
                  <span>Grupos demográficos</span>
                </a> 
              </Link>
            </li>
          </ul>
        </div>
      </SimpleBar>
    </React.Fragment>
  )
}

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
}

export default SidebarContent;
