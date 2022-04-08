import React from 'react';
import '../style/Search.css';


export default function Search() {
    return (
        <form>
            <section>
                <h1>Body Category:
                    <div className="dropdown">
                        <button className="dropbtn">Dropdown</button>
                        <div className="dropdown-content">
                            <a>Abs</a>
                            <a>Arms</a>
                            <a>Back</a>
                            <a>Calves</a>
                            <a>Chest</a>
                            <a>Legs</a>
                            <a>Shoulders</a>
                        </div>
                    </div>
                </h1>
                
            </section>
        </form>
    );
}

