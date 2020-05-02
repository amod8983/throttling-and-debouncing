import React, { useState, useCallback } from 'react';
import './Debouncing.css';

import Card from '../card/Card';
import { debounce } from '../../utils/Utils';

const Debouncing = (props) => {

    const [value1, setValue1] = useState('');
    const [eventCount1, setEventCount1] = useState(0);
    const [networkCount1, setNetworkCount1] = useState(0);
    const [delay, setDelay] = useState('100');

    const [value2, setValue2] = useState('');
    const [eventCount2, setEventCount2] = useState(0);
    const [networkCount2, setNetworkCount2] = useState(0);

    const debounceNetworkChange = useCallback(debounce((value)=> {
        setNetworkCount1(value)
     }, Number(delay)), [delay]);
 

    const input1ChangeHandler = (event) => {
        setValue1(event.target.value);
        setEventCount1(eventCount1 + 1);
        debounceNetworkChange(networkCount1 + 1);
    }

    const input2ChangeHandler = (event) => {
        setValue2(event.target.value);
        setEventCount2(eventCount2 + 1);
        setNetworkCount2(networkCount2 + 1);
    }

    return (
        <Card>
            <h2>Debouncing</h2>
            <div className='simple-container'>
                <div className="simple-box">
                    <h4><u>Input with debouncing</u></h4>
                    <div className='list-container'>
                        <ul>
                            <li>Event count: <span className='event-class'>{eventCount1}</span></li>
                            <li>Network call count: <span className='network-class'>{networkCount1}</span></li>
                        </ul>
                    </div>
                    <div className="search-input">
                        <label>Type Something</label>
                        <input
                            type='text'
                            value={value1}
                            onChange={input1ChangeHandler}
                        />
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
                    <h4><u>Input without debouncing</u></h4>
                    <div className='list-container'>
                        <ul>
                            <li>Event count: <span className='event-class'>{eventCount2}</span></li>
                            <li>Network call count: <span className='network-class'>{networkCount2}</span></li>
                        </ul>
                    </div>
                    <div className="search-input">
                        <label>Type Something</label>
                        <input
                            type='text'
                            value={value2}
                            onChange={input2ChangeHandler}
                        />
                    </div>
                </div>
            </div>
            <div>
               <p className='info'>
               In debouncing we make sure that certain task is not executed on every on-change event. In the above case we make sure that once the user had stopped typing for <em><b>{delay}ms</b></em> ,then only we increase network call counter.
               </p>
            </div>
        </Card>
    )
}

export default Debouncing;