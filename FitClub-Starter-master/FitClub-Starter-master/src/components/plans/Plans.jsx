import React from "react";
import {plansData} from '../../data/plansData'
import "./plans.css";
import whiteTick from '../../assets/whiteTick.png'
const Plans = () => {
  return (
    <div className="plans-container" id="plans">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="programs-header" style={{gap:'2rem'}}>
        <span className="stroke-text">Ready to Start</span>
        <span>Your Journey</span>
        <span className="stroke-text">now withus</span>
      </div>
      {/* plansData */}
      <div className="plans">
      {plansData.map((plan, i) => (
        <div className="plan" key={i}>
          <span>{plan.icon}</span>
          <span>{plan.name}</span>
          <span>${plan.price}</span>

          <div className="features">
            {plan.features.map((feature, i) => (
              <div className="feature" key={i}>
                <img src={whiteTick} alt="" /> {/* whiteTick is likely an imported image */}
                <span>{feature}</span>
              </div>
            ))}
          </div>
          <div><span>see mor benifits-></span></div>
          <button className="btn">join now</button>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Plans;
