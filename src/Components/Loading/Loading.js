import React from 'react'
import LoadingGif from '../../Assets/Img/Loading/loading2.gif'

export default function Loading() {
    return (
        <div className="loading"><h2> loading...</h2>
        <img src={LoadingGif} alt="loading gif"/>
        </div>
    )
}
