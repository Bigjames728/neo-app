import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AsteroidList extends Component {
    constructor() {
        super();
        this.state = {
            error: null,
            isLoded: false,
            asteroids: []
        };
    }

    async componentDidMount() {
        const API_KEY = 'cQOiV75HayqqGVRk4qpcamRywUxoP0G3qBJiohT8';
        fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2021-08-13&end_date=2021-08-14&api_key=${API_KEY}`)
            .then(res => res.json())
            .then(
                (result) => {
                    // console.log(result.near_earth_objects['2021-08-13']);
                    this.setState({
                        isLoaded: true,
                        asteroids: result.near_earth_objects['2021-08-13']
                    });
                    
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )

        // Below is an easier more clear way of reading/writing the above code. Keeping for reference.

        // const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2021-08-13&end_date=2021-08-14&api_key=${API_KEY}`;
        // const response = await fetch(url);
        // const data = await response.json();
        // console.log(data.near_earth_objects);
        // this.setState({ asteroids: data.near_earth_objects, isLoaded: true });
        
            
    }

    render() {

        const { asteroids, isLoaded, error } = this.state;

        if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            console.log(asteroids);
            return (
                
                 <ul>
                     {asteroids.map((asteroid, index) => {
                         return (
                            <li key={`${asteroid.id}`}>
                             <p>Asteroid Name: {asteroid.name}</p> 
                             <p>{asteroid.nasa_jpl_url}</p>
                         </li>
                         )
                     })}
                 </ul>
            )
        }
    }
}

export default AsteroidList;