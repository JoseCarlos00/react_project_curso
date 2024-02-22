import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
 export function App () {
  const format = (userName) => `@${userName}`
  // const formattedUserName = <span>@{'UserName'}</span>

  const midu = {  isFollowing: true, userName: "midudev", formattedUserName:format}

  return (
    <section className='App'>
      <TwitterFollowCard {...midu} >
      Miguel Angel Duran
      </TwitterFollowCard>


      <TwitterFollowCard formattedUserName={format} isFollowing userName="pherald">
      Pablo Hernandez
      </TwitterFollowCard>

      <TwitterFollowCard formattedUserName={format} isFollowing userName="elonmusk" >
      Elon Musk
      </TwitterFollowCard>
      <TwitterFollowCard formattedUserName={format}  userName="vxnder">
      Vanderhart
      </TwitterFollowCard>
   </section>
  )
}

