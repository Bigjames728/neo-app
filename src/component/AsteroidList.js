import React, { Component } from 'react';

class AsteroidList extends Component {
    constructor() {
        super();
        this.state = {
            error: null,
            isLoded: false,
            asteroids: []
        };
    }

    componentDidMount() {
        const API_KEY = 'cQOiV75HayqqGVRk4qpcamRywUxoP0G3qBJiohT8';
        fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2021-08-13&end_date=2021-08-14&api_key=${API_KEY}`)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        isLoaded: true,
                        asteroids: result.asteroids
                    });
                    
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
            
    }

    render() {

        const { asteroids, isLoaded, error } = this.state;
        

        if (!isLoaded) {
            return <div>Loading...</div>;
        } else {

            return (
                
                <ul>
                    {asteroids.map(asteroid => (
                        <li key={asteroid.id}>
                            {asteroid.name} {asteroid.close_approach_data.miss_distance.miles}
                        </li>
                    ))}
                </ul>
            )
        }
    }
}

export default AsteroidList;