import React from 'react'
import { Link } from 'react-router-dom';

const PeopleCard = ({ person, isRQ }) => {
  return (
    <div className='info-card'>
      <img src={person.image} width="130" height="130" alt="personpic" />
      <h3>{person.name}</h3>
      <p >Species: {person.species}</p>
      <Link to={isRQ ? `/rq-people/${person.id}` : `/people/${person.id}`}>Person Details</Link>
    </div>
  )
}

export default PeopleCard