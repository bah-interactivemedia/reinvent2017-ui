import React from 'react';
import { RadialChart } from 'react-vis';

const ReportingDonut = ({data}) => {
    const colorRange = ['green', 'yellow', 'red'];
    return (
        <div>
            <RadialChart
                colorRange={colorRange}
                data={data}
                innerRadius={100}
                radius={140}
                width={300}
                height={300} />
        </div>
    );
};

export default ReportingDonut;