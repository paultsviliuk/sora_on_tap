import React from 'react';
import type { FunctionComponent } from 'react';
import { Alert, MetaInfo } from '../../components';
import { getRouteMetaInfo } from '../../config/routes.config';

const About: FunctionComponent = () => (
  <div className="container view-wrapper">
    <MetaInfo {...getRouteMetaInfo('About')} />
    <Alert
      title="About Sora Tap"
      alertAnimation="rubberBand_animation 1s"
      subTitle="Very interesting information about Sora Tap."
    />
  </div>
);

export default About;