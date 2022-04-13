// import React from 'react';
// import '../style/Search.css';
// import { useMutation } from '@apollo/client';
// import { ADD_WORKOUT } from '../graphql/mutations/createWorkouts';

// export default function Search() {

//     const [workoutState, setWorkoutState] = React.useState({
//         focusId: "",
//     })

//     const [addWorkout] = useMutation(ADD_WORKOUT);

//     const searchWorkout = async (search) => {
//         search.preventDefault();
//         const res = await searchWorkout({
//             variables: {
//                 focusId: workoutState.focusId
//             }
//         })

//         setWorkoutState({
//             focusId: "",
//         })
//     }

//     const handleChange = (e) => {
//         const { focusId, value } = e.target

//         setWorkoutState({
//             ...workoutState,
//             [focusId]: value,
//         })
//     }

//     return (
//         <section>
//             <form onSubmit={searchWorkout}>
//                 <h1>Body Category:
//                     <button name = 'focusId' type = 'submit' onClick={handleChange}>Abs</button>
//                     <button name = 'focusId' type = 'submit' onClick={handleChange}>Arms</button>
//                     <button name = 'focusId' type = 'submit' onClick={handleChange}>Back</button>
//                     <button name = 'focusId' type = 'submit' onClick={handleChange}>Calves</button>
//                     <button name = 'focusId' type = 'submit' onClick={handleChange}>Chest</button>
//                     <button name = 'focusId' type = 'submit' onClick={handleChange}>Legs</button>
//                     <button name = 'focusId' type = 'submit' onClick={handleChange}>Shoulders</button>
//                 </h1>
//             </form>

            



            
//         </section>
//     );
// }

