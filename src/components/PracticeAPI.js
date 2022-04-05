import React from 'react';
import axios from 'axios';
import '../style/addWorkout.css'

const baseURL = `https://wger.de/api/v2/exerciseinfo/?language=2`;

export default function WorkoutList() {
    const [posts, setPosts] = React.useState([]);

    React.useEffect(() => {
        const findWorkout = async () => {
            await axios.get(baseURL).then((response) => {
                setPosts(response.data.results);
            }).catch(err => console.error(err));
        }
        findWorkout()
    }, []);

    if (!posts) return null;

    return (
        <div>
            {posts.map((post, index) => (
                <div className='workoutBox' key={post.id.toString() + index}>
                    <h1>{post.name}</h1>
                    <p>{post.description}</p>
                    <p>{post.category.name}</p>
                    <button className='addToWorkout'>Add to Workout</button>
                </div>
            ))}
        </div>
        
    );
}