import React from 'react';
import { Link } from 'react-router-dom';
import lodash from 'lodash';
import { AiFillHome } from 'react-icons/ai';
export default function MyTeam({ team }) {
    team.sort((a, b) => {
        let totalA = parseInt(a.powerstats.intelligence) + parseInt(a.powerstats.strength) + parseInt(a.powerstats.speed) + parseInt(a.powerstats.durability) + parseInt(a.powerstats.power) + parseInt(a.powerstats.combat);
        let totalB = parseInt(b.powerstats.intelligence) + parseInt(b.powerstats.strength) + parseInt(b.powerstats.speed) + parseInt(b.powerstats.durability) + parseInt(b.powerstats.power) + parseInt(b.powerstats.combat);
        return (totalB - totalA);
    })
    return (
        <div class='my-team'>
            <Link to='/home'><button class='my-team-button'><AiFillHome /></button></Link>
            <h1 class='my-team-title'>Team Members</h1>
            <div class='my-team-images'>
                {
                    team.map((e) => (
                        <img class='my-team-images-image' src={e.image.url} alt="" />
                    ))
                }
            </div>
            <div class='my-team-data'>
                <div>
                    <h1 class='my-team-data-title'>TeamStats:</h1>
                    <div class='my-team-data-stats'>
                        <p>Intelligence: {lodash.sum(team.map(e => parseInt(e.powerstats.intelligence)))}</p>
                        <p>Strength:{lodash.sum(team.map(e => parseInt(e.powerstats.strength)))}</p>
                        <p>Speed: {lodash.sum(team.map(e => parseInt(e.powerstats.speed)))}</p>
                        <p>Durability: {lodash.sum(team.map(e => parseInt(e.powerstats.durability)))}</p>
                        <p>Power: {lodash.sum(team.map(e => parseInt(e.powerstats.power)))}</p>
                        <p>Combat: {lodash.sum(team.map(e => parseInt(e.powerstats.combat)))}</p>
                    </div>
                </div>
                <div>
                    <h1 class='my-team-data-title'>Average:</h1>
                    <div class='my-team-data-stats'>
                        <p>Weight {Math.floor(lodash.mean(team.map(e => parseInt(e.appearance.weight[1].slice(0, e.appearance.weight[1].length - 3)))))} kg.</p>
                        <p>Weight {Math.floor(lodash.mean(team.map(e => parseInt(e.appearance.height[1].slice(0, e.appearance.height[1].length - 3)))))} cm.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}