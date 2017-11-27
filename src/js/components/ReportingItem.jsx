import React from 'react';

const ReportingItem = ({title, children}) => {
    return (
        <div className="reporting-item">
            {children}
            <h3 className="reporting-item-title">{title}</h3>
        </div>
    );
};

export default ReportingItem;