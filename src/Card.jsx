import React from 'react'

function Card(props) {
    return (
        <>
                        <div className='col-md-4 col-10 mx-auto'>
                        <div class="card" >
  <img src={props.imgsrc} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title font-weight-bold">{props.title}</h5>
    <p className="card-text">{props.text}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>




        </>
    )
}

export default Card
