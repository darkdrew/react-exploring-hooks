import React, { useState, useEffect } from "react";

const DataLoader = () => {
    // Define initial state
    const [data, setData] = useState([]);

    // useEffect is similar to lifecycle
    useEffect(() => {
        fetch('http://dummy.restapiexample.com/api/v1/employees')
            .then(response => response.json())
            .then(data => setData(data))
    })

    return (
        <div>
            {data.map(i => i.id)}
        </div>
    )
}

export default DataLoader;