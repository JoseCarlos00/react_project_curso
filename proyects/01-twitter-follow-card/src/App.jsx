import { useState } from 'react'

import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'


const user = [
  {
    userName: 'midudev',
    name: 'Miguel Angel Duran',
    isFollowing: true
  },
  {
    userName: 'pheralb',
    name: 'Pablo Hernandez',
    isFollowing: false
  },
  {
    userName: 'pacohdezs',
    name: 'Paco Hdez',
    isFollowing: true
  },
  {
    userName: 'joskar00',
    name: 'Jose Carlos Aguirre',
    isFollowing: false
  },
  {
    userName: 'TMchein',
    name: 'Thomas',
    isFollowing: false
  }
]

 export function App () {
  const [name, setName] = useState('pherald')

  const format = (userName) => `@${userName}`
  // const formattedUserName = <span>@{'UserName'}</span>
  // const midu = {  initialIsFollowing: true, userName: "midudev", formattedUserName:format}
  
  const changeName = () => {
    setName('Jose Carlos')
  }
/*
  return (
    <section className='App'>
      <TwitterFollowCard {...midu} >
      Miguel Angel Duran
      </TwitterFollowCard>
      
      <TwitterFollowCard formattedUserName={format}  userName={name}>
      Pablo Hernandez
      </TwitterFollowCard>

      <TwitterFollowCard formattedUserName={format} initialIsFollowing userName="elonmusk" >
      Elon Musk
      </TwitterFollowCard>
      <TwitterFollowCard formattedUserName={format}  userName="vxnder">
      Vanderhart
      </TwitterFollowCard>

      <button onClick={changeName}>
        Cambiar nombre
      </button>
   </section>
  )

 */

  return (
    <section className='app'>
      {
        user.map( user => {
          const {userName, name, isFollowing} = user

          return (
            <TwitterFollowCard 
              key={userName}
              formattedUserName={format}  
              userName={userName} 
              initialIsFollowing={isFollowing}
            > 
              {name}
            </TwitterFollowCard>
          
          )
        })
      }
    </section>
  )
}

