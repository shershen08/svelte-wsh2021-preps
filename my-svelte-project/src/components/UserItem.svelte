<script>
    import {push } from 'svelte-spa-router'
    import {userStore} from '../store/user';

    export let user;

    const onUserSelect = () => {
      userStore.set(user.name);
    push(`/chat/${user.id}`)
  }
</script>
<div class="chat_list" on:click={onUserSelect}>
    <div class="chat_people">
      <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>
      <div class="chat_ib">
        <h5>{user.name} <span class="chat_date">Dec 25</span></h5>
        <p>Test, which is a new approach to have all solutions 
          astrology under one roof.</p>
      </div>
    </div>
  </div>

<!-- <div class="chat_list">
    <div class="chat_people">
      <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>
      <div class="chat_ib">
        <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>
        <p>Test, which is a new approach to have all solutions 
          astrology under one roof.</p>
      </div>
    </div>
  </div> -->