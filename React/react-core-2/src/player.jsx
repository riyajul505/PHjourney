import { useEffect, useState } from "react";

import Counter from "./count";
export default function Player(){
    const [team, setTeam] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setTeam(data))

    }, [])
    const teamStyletyle = {
        border: '2px solid red',
        padding: '15px',
        margin: '15px',
    }
    return(
        <>
            <div style={teamStyletyle}>
                <h3>Player: {team.length}</h3>

                {
                    team.map(plr =>
                        <Counter player={plr}></Counter>
                    )
                }
                {/* <button onClick={()=>{
                    
                    setTeam(team-1);
                }}>Add Player</button> */}
            </div>
        </>
    )
}