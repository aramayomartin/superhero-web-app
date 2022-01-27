import React from 'react';

export default function SearchCard({toShow,add}){
    return(
        <div class='cards'>
            {
                toShow.map(e=>{
                    return(
                        <div class='card' key={e.id}>
                        <h2 class='card-name'>{e.name}</h2>
                        <img class='card-image' src={e.image.url} alt="" />
                        <button class='card-button' onClick={()=>(add(e))}>Add to my team</button>
                        </div>
                )
                })
            }
        </div>
    )
}