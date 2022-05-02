import React from "react";
const Sidebar = () => {
    return(
        <div className="sidebar">
        
        <div className="simlebar-sc" data-simplebar>
            <ul className="sidebar-menu tf">
                <li className="sidebar-submenu">
                    <a href="index.html" className="sidebar-menu-dropdown">
                        <i className='bx bxs-home'></i>
                        <span>Vista general</span>
                        <div className="dropdown-icon">
                            <i className='bx bx-chevron-down'></i>
                        </div>
                    </a>
                </li>
                <li className="sidebar-submenu">
                    <a href="project.html" className="sidebar-menu-dropdown">
                        <i className='bx bxs-bolt'></i>
                        <span>Proyectos</span>
                        <div className="dropdown-icon"><i className='bx bx-chevron-down'></i></div>
                    </a>
                </li>

                <li className="sidebar-submenu">
                    <a href="clients.html" className="sidebar-menu-dropdown">
                        <i className='bx bxs-user'></i>
                        <span>Donaciones</span>
                        <div className="dropdown-icon"><i className='bx bx-chevron-down'></i></div>
                    </a>
                </li>
                <li>
                    <a href="board.html">
                        <i className='bx bxs-dashboard'></i>
                        <span>Visitas</span>
                    </a>
                </li>
                <li>
                    <a href="calendar.html">
                        <i className='bx bx-calendar'></i>
                        <span>Comentarios</span>
                    </a>
                </li>

                <li>
                    <a href="message.html">
                        <i className='bx bxs-message-rounded-detail' ></i>
                        <span>Mensajes</span>
                    </a>
                </li>
                <li className="sidebar-submenu">
                    <a href="chart-apex.html" className="sidebar-menu-dropdown">
                        <i className='bx bxs-component' ></i>
                        <span>Usuarios</span>
                        <div className="dropdown-icon"><i className='bx bx-chevron-down'></i></div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    );

};

export default Sidebar