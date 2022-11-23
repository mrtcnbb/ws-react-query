import React from 'react'

const PersonCard = ({ data }) => {
  return (
    <div className='detail-card'>
      <div >
        <img src={data.image} alt="pic" />
      </div>
      <div >
        <p>
          <strong>Name: </strong> {data.name}
        </p>
        <p>
          <strong>Species: </strong> {data.species}
        </p>
        <p>
          <strong>Gender: </strong> {data.gender}
        </p>
        <p>
          <strong>Location: </strong> {data.location.name}
        </p>
        <p>
          <strong>Status: </strong> {data.status}
        </p>
      </div>
    </div>
  )
}

export default PersonCard