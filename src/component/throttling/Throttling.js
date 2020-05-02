import React, { useState, useCallback } from 'react';
import './Throttling.css'

import Card from '../ui/card/Card';
import Button from '../ui/button/Button';
import { throttle } from '../../utils/Utils';

const Throttling = (props) => {

    const [eventCount1, setEventCount1] = useState(0);
    const [networkCount1, setNetworkCount1] = useState(0);
    const [delay, setDelay] = useState('300');

    const [eventCount2, setEventCount2] = useState(0);
    const [networkCount2, setNetworkCount2] = useState(0);

    const throttleNetworkChange = useCallback(throttle((value) => {
        setNetworkCount1(value)
    }, Number(delay)), [delay]);

    const button1Pressed = () => {
        setEventCount1(eventCount1 + 1);
        throttleNetworkChange(networkCount1 + 1);
    }

    const button2Pressed = () => {
        setEventCount2(eventCount2 + 1);
        setNetworkCount2(networkCount2 + 1);
    }

    return (
        <Card>
            <h2>Throttling</h2>
            <div className='simple-container'>
                <div className="simple-box">
                    <h4><u>Button with throttling</u></h4>
                    <div className='list-container'>
                        <ul>
                            <li>Event count: <span className='event-class'>{eventCount1}</span></li>
                            <li>Network call count: <span className='network-class'>{networkCount1}</span></li>
                        </ul>
                    </div>
                    <div className="search-input">
                        <Button
                            clicked={button1Pressed}
                        >Click</Button>
                    </div>
                    <div className="search-input">
                        <label>Set Delay (millisecond)</label>
                        <input
                            type='number'
                            value={delay}
                            onChange={(event) => setDelay(event.currentTarget.value)}
                        />
                    </div>
                </div>
                <div className="simple-box">
                    <h4><u>Button without throttling</u></h4>
                    <div className='list-container'>
                        <ul>
                            <li>Event count: <span className='event-class'>{eventCount2}</span></li>
                            <li>Network call count: <span className='network-class'>{networkCount2}</span></li>
                        </ul>
                    </div>
                    <div className="search-input">
                        <Button
                            clicked={button2Pressed}
                        >Click</Button>
                    </div>
                </div>
            </div>
            <div>
               <p className='info'>
               <strong>Throttling</strong> is a technique in which, no matter how many times the user fires the event, the attached function will be executed only once in a given time interval. Here we make sure that no matter how many times user had clicked the button, we increase networkCallCounter only once in every <em><b>{delay}ms</b></em>
               </p>
            </div>
        </Card>
    )
}

export default Throttling;