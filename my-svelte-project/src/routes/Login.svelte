<script>
  import {push } from 'svelte-spa-router'
  import { onMount, afterUpdate } from 'svelte';
  //import {push, pop, replace} from 'svelte-spa-router'


  let myLoginForm = {
    valid: false,
    username: '',
    password: ''
  };

  $: if(myLoginForm.username.length > 3 && myLoginForm.password.length > 3){
    myLoginForm.valid = true
  }

  const onLogin = () => {
    console.log(myLoginForm)
    push('/users')
  }
</script>
<div class="container">
    <div class="messaging">
      <div class="card">
        <article class="card-body">
          <h4 class="card-title text-center mb-4 mt-1">Sign in</h4>
          <hr>

          <form>
            <div class="form-group">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text"> <i class="fa fa-user"></i> </span>
                </div>
                <input 
                bind:value={myLoginForm.username}
                class="form-control" placeholder="Email or login" type="text">
              </div>
            </div>
            <div class="form-group">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
                </div>
                <input
                bind:value={myLoginForm.password}
                 class="form-control"
                 placeholder="******"
                 type="password">
              </div>
            </div>
            <div class="form-group">
              <button type="button" id="login-button" on:click={onLogin} disabled="{!myLoginForm.valid}"
                class="btn btn-primary btn-block"> Login </button>
            </div>
          </form>
        </article>
        </div>
 </div></div>