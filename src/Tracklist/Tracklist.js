import React, {useState, useEffect} from 'react';
import Button from '../Button/Button';
import Track from '../Track/Track';

const dummyResults = {
    Name: "Dummy Track",
    Artist: "Dummy Artist",
    Album: "Dummy Album"    
}

function Tracklist(props) {
    const [tracklist, setTracklist] = useState([dummyResults, dummyResults, dummyResults]);


    return (
        <div>
            <form>
                <input type="test" placeholder="Name" />
            </form>
            <Button Content="Save to Spotify" />
        </div>
    )
}

export default Tracklist;
