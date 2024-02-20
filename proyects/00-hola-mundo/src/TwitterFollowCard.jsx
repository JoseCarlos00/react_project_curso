export function TwitterFollowCard ({formattedUserName, userName, name, isFollowing}) {
  console.log(isFollowing);
  return (
    <div>
      <article className='tw-followCcard'>
        <header className='tw-followCcard-header'>
          <img className='tw-followCcard-avatar' 
          alt="avatar"
          src={`https://unavatar.io/${userName}`}
          /> 
          <div className='tw-followCcard-info'>
            <strong>{name}</strong>
            <span>{formattedUserName}</span>
          </div>
        </header>
        <aside>
          <button className='tw-followCcard-button'>
            Seguir
          </button>
        </aside>
      </article>
    </div>
  )
}