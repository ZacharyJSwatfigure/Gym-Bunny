import React from 'react';
import '../style/Search.css';
import { useQuery } from '@apollo/client';
import { FETCH_WORKOUTS } from '../graphql/queries/fetchWorkouts';


export default function Search() {
    
        const { data } = useQuery(FETCH_WORKOUTS);
        let workouts;
        if (data) {
            workouts = data.workouts.slice(0,20);
            console.log(workouts)
            // workouts2 = data.workouts.slice(21,40);
            // console.log(workouts2)
            
            for (let i = 0; i < workouts.length; i++) {
                console.log('hit' + JSON.stringify(workouts))

                return(
                    <div>hello</div>
                )
            }
            
        }

    // return (
    //     <section>
    //         <form>
    //             <h1>Body Category:
    //                 <button >Abs</button>
    //                 <button value='2' type='submit'>Arms</button>
    //                 <button value='3' type='submit'>Back</button>
    //                 <button value='4' type='submit'>Calves</button>
    //                 <button value='5' type='submit'>Chest</button>
    //                 <button value='6' type='submit'>Legs</button>
    //                 <button value='7' type='submit'>Shoulders</button>
    //             </h1>
    //         </form>






    //     </section>
    // );
}

