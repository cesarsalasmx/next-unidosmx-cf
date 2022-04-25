import React, { useState } from "react";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const FunFact = () => {
  const [counter, setCounter] = useState({
    startCounter: false,
  });

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCounter({ startCounter: true });
    }
  };
  return (
    <section className="funfact-one">
      <div className="container">
        <div className="row">
          <div>
            <center><h2 className="funfactsTitle">Numeralia</h2></center>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="funfact-one__single">
              <h3 className="counter">+
                <VisibilitySensor
                  onChange={onVisibilityChange}
                  offset={{ top: 10 }}
                  delayedCall
                >
                  <CountUp end={counter.startCounter ? 5000 : 0} />
                </VisibilitySensor>
              </h3>
              <p>Voluntarios</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="funfact-one__single">
              <h3 className="counter">
                <VisibilitySensor
                  onChange={onVisibilityChange}
                  offset={{ top: 10 }}
                  delayedCall
                >
                  <CountUp end={counter.startCounter ? 20 : 0} />
                </VisibilitySensor>
              </h3>
              <p>Empresas aliadas</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="funfact-one__single">
              <h3 className="counter">+
                <VisibilitySensor
                  onChange={onVisibilityChange}
                  offset={{ top: 10 }}
                  delayedCall
                >
                  <CountUp end={counter.startCounter ? 30 : 0} />
                </VisibilitySensor>
              </h3>
              <p>Colaboraciones con orgs.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="funfact-one__single">
              <h3 className="counter">+
                <VisibilitySensor
                  onChange={onVisibilityChange}
                  offset={{ top: 10 }}
                  delayedCall
                >
                  <CountUp end={counter.startCounter ? 20 : 0} />
                </VisibilitySensor>
              </h3>
              <p>Colaboraciones</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFact;
