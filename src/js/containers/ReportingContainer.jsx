import React from 'react';

import Heading from '../components/Heading';
import ReportingItem from '../components/ReportingItem';
import ReportingValue from '../components/ReportingValue';
import ReportingDonut from '../components/ReportingDonut';

const ReportingContainer = () => {
    return (
        <div className="container-fluid">
            <Heading text="Reporting" />
            <div className="row">
                <div className="col col-lg-6">
                    <ReportingItem title="Students">
                        <ReportingValue value="69" />
                    </ReportingItem>
                </div>
                <div className="col col-lg-6">
                    <ReportingItem title="Avg BMI">
                        <ReportingValue value="22.5" />
                    </ReportingItem>
                </div>
            </div>
            <div className="row">
                <h3>Activities</h3>
            </div>
            <div className="row">
                <div className="col col-xl">
                    <ReportingItem title="Curls">
                        <ReportingDonut data={[{angle:42},{angle:20},{angle:7}]} />
                    </ReportingItem>
                </div>
            </div>
        </div>
    );
};

export default ReportingContainer;