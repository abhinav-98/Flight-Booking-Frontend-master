import React from 'react'
// based on login --> redirect user to UserDashboard or AdminDashboard
const UserLogin = () => {
  return (
    <>
      <section className='showcase login'>
        <div className='showcase-overlay'>
          <form className='form-control'>
          <input
              type='number'  
              name='userid'
              id='userid'
              placeholder='UserID'
              required
            />
            <input
              type='password'
              name='password'
              id='password'
              placeholder='Password'
            />
            <button type='submit'>Log In</button>
          </form>
        </div>
      </section>
    </>
  ) 
}

export default UserLogin;