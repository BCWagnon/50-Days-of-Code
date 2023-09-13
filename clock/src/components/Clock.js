import React, { useState, useEffect } from 'react'

function Clock() {
    const [clockState, setClockState] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClockState(date.toLocaleTimeString());
        }, 1000);
    }, []); 

    return (
        <div>
            <div className='content'>
                <h1>Current time:</h1>
            </div>
            <p className='clock'>{clockState}</p>
        </div>
    )
}

export default Clock