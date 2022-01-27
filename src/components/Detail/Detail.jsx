import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';

export default function Detail() {
    const { id } = useParams();
    const [data, setData] = useState({});
    useEffect(() => {
        async function f(id) {
            const datos = (await axios.get(`https://www.superheroapi.com/api.php/7091252890915481/${id}`)).data;
            setData(datos);
        }
        f(id)
    }, [id]);
    return (
        <div class='detail'>
            <Link to='/home'><button class='detail-button'><AiFillHome /></button></Link>
            {data.name &&
                <div class='card-detail'>
                    <h1 class='card-detail-name'>{data.name}</h1>
                    <div class='card-detail-elements'>
                        <img class='card-detail-elements-image' src={data.image.url} alt="" />
                        <div class='card-detail-elements-info'>
                            <p class='card-detail-elements-text'>Peso: {data.appearance.weight[1]}.</p>
                            <p class='card-detail-elements-text'>Altura: {data.appearance.height[1]}.</p>
                            <p class='card-detail-elements-text'>Alias: {data.name}.</p>
                            <p class='card-detail-elements-text'>Color de ojos: {data.appearance['eye-color']}.</p>
                            <p class='card-detail-elements-text'>Color de cabello: {data.appearance["hair-color"]}.</p>
                            <p class='card-detail-elements-text'>Lugar de trabajo: {data.work.base}.</p>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}