import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
 export function App () {
  const format = (userName) => `@${userName}`
  // const formattedUserName = <span>@{'UserName'}</span>

  return (
    <section className='App'>
      <TwitterFollowCard formattedUserName={format} number={[1,2,3]} isFollowing userName="midudev" name="Miguel Angel Duran" />
      <TwitterFollowCard formattedUserName={format} isFollowing userName="pherald" name="Pablo Hernandez" />
      <TwitterFollowCard formattedUserName={format} isFollowing userName="elonmusk" name="Elon Musk" />
      <TwitterFollowCard formattedUserName={format}  userName="vxnder" name="Vanderhart" />
   </section>
  )
}

