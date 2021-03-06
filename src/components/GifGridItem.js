import React from 'react'

export const GifGridItem = ({title, url}) => {

  // console.log(id, title, url)

  return (
    <div className="card animate__animated animate__fadeIn">
      {/* {img.title} */}
      <img src={url} alt={title} />
      <center style={{marginTop: 10 + 'px'}}>{title}</center>
    </div>
  )
}
