import React from 'react'
import CustomButton from './CustomButton'

function SingupForm() {
  return (
    
    <div>
  <h2>welcome to singup page</h2>
  <input type ="text" placeholder="enter your name"/> <br/>
  <input type ="email" placeholder="enter your email address"/><br/>
  <input type ="password" placeholder="enter your password"/> <br/>
  <CustomButton/>
  <p>already have and account please login here</p>
  <a href="https://www.w3schools.com/tags/tag_div.ASP">login here</a>

</div>
  )
}

export default SingupForm