import React from 'react';
import './obj.css/marketing.css';

function Marketing() {
    return (
        <div className='d-flex flex-column'>
            <div className='production-one my-4 justify-content-between d-flex flex-row'>
                <div className='d-flex flex-column new-one text-dark'>
                    <span className='obj-title'>Marketing</span>
                    <span className='obj-desc'>To deliver the awareness and need for data management in the trade and investment sector</span>
                </div>
                <div>
                    <span className='obj-extent'>Read More</span>
                </div>
            </div>
        </div>
    )
}

export default Marketing