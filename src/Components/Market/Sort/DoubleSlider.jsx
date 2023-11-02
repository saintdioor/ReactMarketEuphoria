import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'; 
import './CustomSlider.css'; 
import { useState } from 'react';

const DoubleSlider = () => {
    const [range, setRange] = useState([1, 999]);

    const handleRangeChange = (newRange) => {
        setRange(newRange);
    };

    const handleMinInputChange = (e) => {
        const newValue = parseInt(e.target.value.slice(1), 10);
        if (!isNaN(newValue)) {
            setRange([newValue, range[1]]);
        } else {
            setRange([0, range[1]]);
        }
    };

    const handleMaxInputChange = (e) => {
        const newValue = parseInt(e.target.value.slice(1), 10);
        if (!isNaN(newValue)) {
            setRange([range[0], newValue]);
        } else {
            setRange([range[0], 999]);
        } 
    };

    return (
        <div>
            <Slider
                range
                min={1}
                max={999}
                value={range}
                onChange={handleRangeChange}
                pushable={1}
                className='slider'
            />
            <div className='inputs'>
                <input
                    type="text"
                    value={`$${range[0]}`}
                    onChange={handleMinInputChange}
                    className="custom_input"
                />
                <input
                    type="text"
                    value={`$${range[1]}`}
                    onChange={handleMaxInputChange}
                    className="custom_input"
                />
            </div>
        </div>
    );
};

export default DoubleSlider;
