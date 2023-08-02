import React from 'react';

const BodyParts = ({item}: { item: string }) => {
    return (
        <div className={item}></div>
    );
};

export default BodyParts;