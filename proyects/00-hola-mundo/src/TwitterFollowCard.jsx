import { useState } from "react";

export function TwitterFollowCard ({children, formattedUserName, userName, initialIsFollowing }) {

  const [isFollowing, setIsFollowwing] = useState(initialIsFollowing)


  const text = isFollowing ? 'Siguiendo' : 'Seguir';
  const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

  const handleClick = () => {
    setIsFollowwing(!isFollowing)
  }

  return (
    <div>
      <article className='tw-followCard'>
        <header className='tw-followCard-header'>
          <img className='tw-followCard-avatar' 
          alt="avatar"
          src={`https://unavatar.io/${userName}`}
          /> 
          <div className='tw-followCard-info'>
            <strong>{children}</strong>
            <span>{formattedUserName(userName)}</span>
          </div>
        </header>
        <aside>
          <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de Seguir</span>
          </button>
        </aside>
      </article>
    </div>
  )
}