// Import data from API using Axios
import axios from 'axios'
import { useEffect, useState } from 'react'

const useAxios = ({ content_url }) => {
  const [data, setData] = useState({})
  useEffect(() => {
    axios.get(content_url).then(response => {setData(response.data)})
  },[])
  console.log(data)
  return data
}

export default useAxios