import React, { useEffect, useState } from 'react';

function App() {

    const [data, setData] = useState('');

    async function fetchData() {
        const test = await fetch('http://localhost:3001/test').then(response => response.json());
        setData(test.message);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
        <h1>{data}</h1>
        </div>
    );
}

export default App;