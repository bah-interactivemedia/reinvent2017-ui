import React from 'react';
import { RadialChart } from 'react-vis';

const ReportingDonut = ({data}) => {
    const colorRange = ['#0A1F38', '#cbb677', '#e01a31'];
    return (
        <div className="reporting-donut">
            <RadialChart
                colorRange={colorRange}
                data={data}
                innerRadius={100}
                radius={140}
                width={400}
                height={400} />
        </div>
    );
};

export default ReportingDonut;