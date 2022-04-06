import React from 'react';
import axios from 'axios';
import '../style/addWorkout.css'

let userInput = '';


// let baseURL = `https://wger.de/api/v2/exerciseinfo/?limit=50/?language=2&category&id=10`;



let baseURL = `https://wger.de/api/v2/exerciseinfo/?language=2`;



export default function WorkoutList() {
    const options = {
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        headers: {
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
            'X-RapidAPI-Key': '568d91d257msh08056a4a6e14a0ap190e88jsnda8965713d51'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
    // const [posts, setPosts] = React.useState([]);

    // React.useEffect(() => {
    //     const findWorkout = async () => {
    //         await axios.get(baseURL).then((response) => {
    //             setPosts(response.data.results);
    //         }).catch(err => console.error(err));
    //     }
    //     findWorkout()
    // }, []);

    // if (!posts) return null;

    // return (
    //     <div>
    //         {posts.map((post, index) => (
    //             <div className='workoutBox' key={post.id.toString() + index}>
    //                 <p>{post.name}</p>
    //                 <h1>{post.description}</h1>
    //                 <h1>{post.category.id}</h1>
    //                 {/* <p>{post.category.name}</p> */}
    //                 <button className='addToWorkout'>Add to Workout</button>
    //             </div>
    //         ))}
    //     </div>

    // );
}