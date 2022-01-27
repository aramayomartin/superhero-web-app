import React from 'react';
import { Link } from 'react-router-dom';
export default function Team({ favs, deleteFromMyTeam }) {
    return (
        <div class='cards-team'>
            {
                favs.map(e => {
                    return (
                        <div class='card-team' key={e.name + e.id}>
                            <h2 class='card-team-name' key={e.name}>{e.name}</h2>
                            <img class='card-team-image' key={e.image.ur} src={e.image.url} alt="" />
                            <h3 class='card-team-text'>Power stats:</h3>
                            <p class='card-team-text' key={e.powerstats.intelligence}>Intelligence: {e.powerstats.intelligence}</p>
                            <p class='card-team-text' key={e.powerstats.strength}>Strength: {e.powerstats.strength}</p>
                            <p class='card-team-text' key={e.powerstats.speed}>Speed: {e.powerstats.speed}</p>
                            <p class='card-team-text' key={e.powerstats.durability}>Durability: {e.powerstats.durability}</p>
                            <p class='card-team-text' key={e.powerstats.durability}>Power: {e.powerstats.power}</p>
                            <p class='card-team-text' key={e.powerstats.combat}>Combat: {e.powerstats.combat}</p>
                            <div class='card-team-buttons'>
                                <Link to={`/${e.id}`}><button class='card-team-button' key={e.image.url + e.id}>Detail</button></Link>
                                <button class='card-team-button' key={e.name + e.image.url} onClick={() => deleteFromMyTeam(e.id)}>Delete</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}