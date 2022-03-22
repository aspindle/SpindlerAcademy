import React from 'react';
import { Link } from 'react-router-dom';

export default function Donate() {
    return (
        <>
        <Link to="/">Back</Link>
        <h1>Donate (actually Gift)</h1>
        <div id="donate">
        
        <p>According to my rudimentary search, I must distinguish that you are not making a donation to me, and rather a gift to me. The difference 
            being that you can not write it off on your taxes. Considering I'm only accepting cryptocurrency, I'm not sure if this applies; but I wanted to 
            state it anyway. If you would still like to support me, my addresses are:</p><br />
        

        <h2>BTC:</h2> <br />
        <p>bc1quzt4pmjnk7v2046jx9tmjn5fkv2zdqffr9khqc</p>
        <h2>DOGE:</h2> <br />
        <p>DFQhAMEZUKZUkuRyJ4Nz19EESDkVHi4uqx</p>
        </div>
        </>
    )
}