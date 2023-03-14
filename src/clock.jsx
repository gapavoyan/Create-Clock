import React, { useEffect, useState } from 'react'

function Clock() {
    const date = new Date().toLocaleTimeString()
    const [time, setTime] = useState(date);
    useEffect(() => {
        const interval = setInterval(()=>{
            const time = new Date().toLocaleTimeString()
            setTime(time);

        })
        return () => {clearInterval(interval)}

    }, []);

    return (
        <div>
            <span style={{fontSize:"60px"}}>{time}</span>
        </div>
    )
}

export default Clock