import React from "react";
import Link from 'next/link';

const General = () => {
    return(
        <div className="main">
       
        <div className="main-content dashboard">
            <div className="row">
                <div className="col-12">
                    <div className="box card-box">
                        <div className="icon-box bg-color-1">
                            <div className="icon bg-icon-1">
                                <i className="bx bxs-bell bx-tada bx-tada"></i>
                            </div>
                            <div className="content">
                                <h5 className="title-box">Donaciones</h5>
                                <p className="color-1 mb-0 pt-4">5 por revisar</p>
                            </div>
                        </div>
                        <div className="icon-box bg-color-2">
                            <div className="icon bg-icon-2">
                                <i className='bx bxs-message-rounded'></i>
                            </div>
                            <div className="content click-c">
                                <h5 className="title-box">Comentarios</h5>
                                <p className="color-2 mb-0 pt-4">5 por revisar</p>
                            </div>
                        </div>
                        <div className="icon-box bg-color-3">
                            <Link className="create d-flex" href="#">
                                <div className="icon bg-icon-3">
                                    <i className="bx bx-calendar"></i>
                                </div>
                                <div className="content">
                                    <h5 className="title-box">Visitas</h5>
                                    <p className="color-3 mb-0 pt-4">255 nuevas</p>
                                </div>
                            </Link>
                        </div>
                        <div className="icon-box bg-color-4">
                            <Link className="create d-flex" href="#" data-toggle="modal" data-target="#add_project">
                                <div className="icon bg-white">
                                    <i className="bx bx-plus"></i>
                                </div>
                                <div className="content d-flex align-items-center">
                                    <h5 className="color-white">Publicar nuevo proyecto</h5>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default General;