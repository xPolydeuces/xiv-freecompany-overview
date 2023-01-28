// Import data from API using Axios

import axios from 'axios'
import { useEffect, useState } from 'react'

const useAxios = ({ CONTENT_URL }) => {
  const [data, setData] = useState({})
  useEffect(() => {
    axios.get(CONTENT_URL).then(response => {setData(response.data)})
  }, [])
  return data
}

export default useAxios