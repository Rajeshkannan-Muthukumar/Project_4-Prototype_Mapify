// const stationInputhandler = (event)=>{
    //     const value= event.target.value
    //     const filteredStationData = Station_Details.filter(data=>{
    //         if(data["Station Name"].toLowerCase().includes(value.toLowerCase())){
    //             return data
    //         }
    //     })
    // console.log(filteredStationData)
    // }

// import React, { useState } from 'react';
// import axios from 'axios';

// const GeocodeComponent = () => {
// const [location, setLocation] = useState('');
// const [coordinates, setCoordinates] = useState({ lat: '', lng: '' });

// const getCoordinates = async () => {
//     const apiKey = '34d82725372a4698962a2409db3cb2c6';
//     const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(location)}&key=${apiKey}`;

//     try {
//       const response = await axios.get(url);
//       const data = response.data;
//       if (data.results.length > 0) {
//         const { lat, lng } = data.results[0].geometry;
//         setCoordinates({ lat, lng });
//       } else {
//         console.log('No results found');
//       }
//     } catch (error) {
//       console.error('Error fetching coordinates:', error);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={location}
//         onChange={(e) => setLocation(e.target.value)}
//         placeholder="Enter a location"
//       />
//       <button onClick={getCoordinates}>Get Coordinates</button>
//       {coordinates.lat && coordinates.lng && (
//         <div>
//           <p>Latitude: {coordinates.lat}</p>
//           <p>Longitude: {coordinates.lng}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default GeocodeComponent;


// function calDistance(lat1,lat2, lon1, lon2)
//     {
//         lon1 = lon1 * Math.PI / 180;
//         lon2 = lon2 * Math.PI / 180;
//         lat1 = lat1 * Math.PI / 180;
//         lat2 = lat2 * Math.PI / 180;

//         // Haversine formula 
//         let dlon = lon2 - lon1; 
//         let dlat = lat2 - lat1;
//         let a = Math.pow(Math.sin(dlat / 2), 2)
//             + Math.cos(lat1) * Math.cos(lat2)
//             * Math.pow(Math.sin(dlon / 2),2);

//         let c = 2 * Math.asin(Math.sqrt(a));

//         // Radius of earth in kilometers. Use 3956 // for miles
//         let r = 6371;

//         // calculate the result
//         return(c * r);
//     }