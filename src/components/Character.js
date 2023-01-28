// Display information about a character
import React from 'react'
import useAxios from '../hooks/useAxios'

const Character = (member_url) => {
  // eslint-disable-next-line no-unused-vars
  const member = useAxios(member_url)
  console.log(member.Name)
  return (
    <div>
      <img src={member.Portrait}></img>
      <h1>Name: {member.Name}</h1>
    </div>
  )
}

export default Character