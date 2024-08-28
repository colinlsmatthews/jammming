import React, {useState, useEffect} from 'react';
import Button from '../Button/Button';

function Track(props) {
    const [track, setTrack] = useState(null);



    return (
        <div>
            <h3>{props.Name}</h3>
            <h4>{props.Artist}</h4>
            <h5>{props.Album}</h5>
            <Button Content="Add to Playlist" />
        </div>
    )
}

export default Track;
