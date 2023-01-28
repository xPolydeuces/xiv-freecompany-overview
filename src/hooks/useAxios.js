// Import data from API using Axios
import axios from 'axios'
import { useEffect, useState } from 'react'

const useAxios = (content_url) => {
  const [member, setMember] = useState({})
  useEffect(() => {
    axios.get(content_url).then(response => setMember(response.data.Character))
  },[])
  return member
}

export default useAxios