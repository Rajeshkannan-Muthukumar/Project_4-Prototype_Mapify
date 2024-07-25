import React, { useState, useEffect,useRef } from 'react';
import Station_Details from "../Station_Details/Stations_Detail.json"
import playsong from "../assets/song.mp3"
import haversine from 'haversine-distance'

function Location({dlatitude,dlongitude}) {

    const audioRef = useRef(new Audio(playsong));
    const [tracking, setTracking] = useState(false);
    const [latitude, setLatitude] = useState();
    const [longitude,setLongitude] = useState();
    const [distance,setdistance] = useState();
    // const [Location, setLocation] = useState([]);

    const geo = navigator.geolocation
    console.log("Destination Latitude: ",dlatitude);
    console.log("Destination Longitude: ",dlongitude);
    const inputhandler = ()=>{
        setTracking(!tracking)
        geo.watchPosition(userCoords)
        audioRef.current.currentTime = 0;
        audioRef.current.pause()
        console.log("Not Ring");
    }

    // geo.watchPosition(userCoords)
    function userCoords(position){
        let latitude = position.coords.latitude
        let longitude = position.coords.longitude
        
        const distanceDiff = haversine({lat :latitude, lng :longitude},{lat:dlatitude,lon: dlongitude})/1000
        
        setdistance(distanceDiff)

        setLatitude(latitude)
        setLongitude(longitude)

        console.log(distanceDiff)
        if( distanceDiff <= 5 && !tracking){
            audioRef.current.play();
            console.log("Ring")
        }
    }

    return (
        <>
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <button onClick={inputhandler}>
                {tracking ? 'Stop Tracking' : 'Start Tracking'}
                </button>
                { (
                    <div style={{ marginTop: '20px' }}>
                        <p>Latitude: {latitude}</p>
                        <p>Longitude: {longitude}</p>
                        <p>Distance : {distance}</p>
                    </div>
                )}
            </div>
            
        </>
        
    );
}

export default Location;
