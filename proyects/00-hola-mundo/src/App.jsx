import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
 export function App () {
  const format = (userName) => `@${userName}`
  const formattedUserName = (<span>@{'dev'}</span>)

  return (
    <section className='App'>
      <TwitterFollowCard formattedUserName={formattedUserName} isFollowing userName="midudev" name="Miguel Angel Duran" />
      <TwitterFollowCard formattedUserName={formattedUserName} isFollowing userName="pherald" name="Pablo Hernandez" />
      <TwitterFollowCard formattedUserName={formattedUserName} isFollowing userName="elonmusk" name="Elon Musk" />
      <TwitterFollowCard formattedUserName={formattedUserName}  userName="vxnder" name="Vanderhart" />
   </section>
  )
}

