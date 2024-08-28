import React, {useState, useEffect} from 'react';
import Button from '../Button/Button';
import Track from '../Track/Track';

const dummyResults = {
    Name: "Dummy Track",
    Artist: "Dummy Artist",
    Album: "Dummy Album"    
}

function SearchResults(props) {
    const [searchResults, setSearchResults] = useState([dummyResults, dummyResults, dummyResults]);



    return (
        <div>
            <Track Name={searchResults[0].Name} Artist={searchResults[0].Artist} Album={searchResults[0].Album} />
            <Track Name={searchResults[1].Name} Artist={searchResults[1].Artist} Album={searchResults[1].Album} />
            <Track Name={searchResults[2].Name} Artist={searchResults[2].Artist} Album={searchResults[2].Album} />
            <Button Content="Save to Spotify" />
        </div>
    )
}

export default SearchResults;
