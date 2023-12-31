import React from "react";

export default function Login(){
    
return(
    <div class="Login">
   <a class="logo" href="https://www.netflix.com/" target="_blank">
  <img src="https://bit.ly/2VdIFUK" alt="Netflix Logo" />
</a>
<div class="login">
  <h1 class="login__title">Sign In</h1>
  <div class="login__group">
    <input class="login__group__input" type="text" required="true" />
    <label class="login__group__label">Email or phone number</label>
  </div>
  <div class="login__group">
    <input class="login__group__input" type="password" required="true" />
    <label class="login__group__label">Password</label>
  </div>
  <button class="login__sign-in" type="button">Sign In</button>
  <div class="login__secondary-cta">
    <a class="login__secondary-cta__text" href="#">Remember me</a>
    <a class="login__secondary-cta__text login__secondary-cta__text--need-help" href="#">Need help?</a>
  </div>
</div>

</div>
)
    
}