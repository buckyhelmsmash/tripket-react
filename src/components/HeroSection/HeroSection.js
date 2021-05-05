// Assets
import React from 'react';
import './HeroSection.css';
import '../../App.less';

import { MdHotel } from 'react-icons/md';
import { IoTrain, IoAirplaneSharp, IoBus } from 'react-icons/io5';

// Component
import { Tabs } from 'antd';
const { TabPane } = Tabs;

function HeroSection() {
  return (
    <div className='hero-container'>
      <Tabs defaultActiveKey='train' centered>
        <TabPane
          tab={
            <span>
              <MdHotel /> Hotel
            </span>
          }
          key='hotel'>
          Content of Tab Hotel
        </TabPane>
        <TabPane
          tab={
            <span>
              <IoTrain /> Train
            </span>
          }
          key='train'>
          Content of Tab Train
        </TabPane>
        <TabPane
          tab={
            <span>
              <IoAirplaneSharp /> Plane
            </span>
          }
          key='plane'>
          Content of Tab Plane
        </TabPane>
        <TabPane
          tab={
            <span>
              <IoBus /> Bus
            </span>
          }
          key='bus'>
          Content of Tab Bus
        </TabPane>
      </Tabs>
    </div>
  );
}

export default HeroSection;
