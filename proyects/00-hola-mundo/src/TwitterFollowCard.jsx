export function TwitterFollowCard ({children, formattedUserName, userName, number, isFollowing }) {
  console.log(isFollowing);   
  console.log(number);
  
  return (
    <div>
      <article className='tw-followCcard'>
        <header className='tw-followCcard-header'>
          <img className='tw-followCcard-avatar' 
          alt="avatar"
          src={`https://unavatar.io/${userName}`}
          /> 
          <div className='tw-followCcard-info'>
            <strong>{children}</strong>
            <span>{formattedUserName(userName)}</span>
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