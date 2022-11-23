import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PersonCard from "../components/PersonCard";


const Person = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState('');
  const url = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    axios.get(url).then(res => {
      setData(res.data)
      setIsLoading(false)
    })
      .catch((error) => {
        setError(error.message)
        setIsLoading(false)
      })
  }, [url]);

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return <h2>{error}</h2>
  }

  return (
    <div>
      {data && <PersonCard data={data} />}
    </div>
  )
}

export default Person