import React, { useState } from "react";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(() => import('react-modal-video'), { ssr: false });
import BlockTitle from "./BlockTitle";
import videoBG from "../assets/images/resources/proyecto-unidos-video-background.jpeg";
import Link from "next/link";

const VideoOne = () => {
  const [open, setOpen] = useState(false);
  const openModal = (e) => {
    e.preventDefault();
    setOpen(true);
  };
  return (
    <section className="video-one">
      <div
        className="container-fluid"
        style={{ backgroundImage: `url(${videoBG})` }}
      >
        <div
          className="video-one__content wow fadeInLeft"
          data-wow-duration="1500ms"
        >
          <BlockTitle
            textAlign="left"
            paraText="Proyecto Unidos MX"
            titleText={`Actividades\nrecientes`}
          />
        </div>
        <ModalVideo
          channel="youtube"
          isOpen={open}
          videoId="35-e7UNeDqgmh6"
          onClose={() => setOpen(false )}
        />
        <Link
          href="#none"
          onClick={openModal}
        >
          <a className="video-one__btn video-popup"><i className="fa fa-play"></i></a>
        </Link>
      </div>
    </section>
  );
};
export default VideoOne;
