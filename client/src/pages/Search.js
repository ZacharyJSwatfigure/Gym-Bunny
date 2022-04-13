import React from 'react';
import '../style/Search.css';
import { useQuery } from '@apollo/client';
import { FETCH_WORKOUTS } from '../graphql/queries/fetchWorkouts';

export default function Search() {

    const FindAbs = async () => {
        const search = useQuery(FETCH_WORKOUTS);
        await search({
            variables: {
                focusId: 1
            }
        })
    };

    return (
        <section>
            <form>
                <h1>Body Category:
                    <button onClick={FindAbs} value = '1'>Abs</button>
                    <button value = '2' type = 'submit'>Arms</button>
                    <button value = '3' type = 'submit'>Back</button>
                    <button value = '4' type = 'submit'>Calves</button>
                    <button value = '5' type = 'submit'>Chest</button>
                    <button value = '6' type = 'submit'>Legs</button>
                    <button value = '7' type = 'submit'>Shoulders</button>
                </h1>
            </form>

            



            
        </section>
    );
}

