import React from 'react'

export default function StarRating({rating}) {

    const stars =[];

    for(let i =0 ; i<5 ; i++){
        stars.push(
            <i className={i<rating?"bi bi-star-fill": "bi bi-star"} style={{color:"gold"}}></i>
        )
    }

  return (
    <div>
        {stars}
    </div>
  )
}
