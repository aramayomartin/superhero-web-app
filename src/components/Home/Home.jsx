import React from 'react';
import SearchCard from '../SearchCard/SearchCard';
import SearchBar from '../SearchBar/SearchBar';
import Team from '../Team/Team';
import { Link } from 'react-router-dom';
import { RiTeamLine } from 'react-icons/ri';
export default function Home({ searched, favs, getSuperheroByName, addFavorite, deleteFromMyTeam }) {
    return (
        <>
            <div>
                <div class='home-nav'>
                    <SearchBar searchByName={getSuperheroByName} />
                    <Link to='/myTeam'><button class='home-nav-button-myteam'>View Team</button></Link>
                </div>
                {searched.length > 0 && <h1 class="title">Results from search</h1>}
                <SearchCard
                    toShow={searched}
                    add={addFavorite}
                />
                {favs.length > 0 && <h1 class="title">Team Members</h1>}
                <Team
                    favs={favs}
                    deleteFromMyTeam={deleteFromMyTeam}
                />
            </div>
        </>
    )
}