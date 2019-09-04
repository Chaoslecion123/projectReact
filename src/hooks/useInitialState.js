import { useState, useEffect } from 'react';

const useInitialState = (API) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/initalState')
            .then(response => response.json())
            .then(data => setVideos(data));
    }, []);

    return videos;
};

export default useInitialState;