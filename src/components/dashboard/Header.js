import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import LogoImage from "../../assets/images/unidos-mx-logo-pruple.png";
const Header = () => {
    
    return (
        <div className="main-header">
        <div className="d-flex">
        
            <div className="main-title">
                <Image src={LogoImage} width="100" alt="awesome post" />
            </div>
        </div>

        <div className="d-flex align-items-center">

            <div className="dropdown d-inline-block mt-12">
                <button type="button" className="btn header-item waves-effect" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       
                        <span className="info d-xl-inline-block  color-span">
                            <span className="d-block fs-20 font-w600">César Salas</span>
                            <span className="d-block mt-7" >cesar.Salas@gmail.com</span>
                        </span>
                            
                        <i className='bx bx-chevron-down'></i>
                    </button>
                <div className="dropdown-menu dropdown-menu-end">
                    <Link className="dropdown-item" href="#"><a><i className="bx bx-user font-size-16 align-middle me-1"></i> <span>Profile</span></a></Link>
                    <Link className="dropdown-item" href="#"><a><i className="bx bx-wallet font-size-16 align-middle me-1"></i> <span>My Wallet</span></a></Link>
                    <Link className="dropdown-item d-block" href="#"><span className="badge bg-success float-end">11</span><a><i className="bx bx-wrench font-size-16 align-middle me-1"></i> <span>Settings</span></a></Link>
                    <Link className="dropdown-item" href="#"><a><i className="bx bx-lock-open font-size-16 align-middle me-1"></i> <span>Lock screen</span></a></Link>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item text-danger" href="user-login.html"><a><i className="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i> <span>Logout</span></a></Link>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Header;