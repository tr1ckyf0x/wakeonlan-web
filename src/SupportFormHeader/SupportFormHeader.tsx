import React from 'react';
import './SupportFormHeader.css';
import appIcon from '../img/owl_app_icon_backgroundless.svg';

export const SupportFormHeader: React.FC = () => (
  <div className="SupportFormHeader">
      <img id="AppIcon" src={appIcon} alt="Logo" />
      <label id="FormTitle">Awake</label>
  </div>
);
