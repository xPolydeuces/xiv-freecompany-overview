// Display information about a character
import React from 'react'
import useAxios from '../hooks/useAxios'

const Character = () => {
  const member = useAxios('https://xivapi.com/character/40048957')
  console.log(member)
  return (
    <div>
      <h1>Name: {member.Character.Name}</h1>
    </div>
  )
}

export default Character