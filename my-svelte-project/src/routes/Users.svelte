<script>
  	import { onMount } from 'svelte';


  import UserItem from '../components/UserItem.svelte';


  let promiseLoadingUsers; 

  async function getUsers() {
    const res = await fetch(`http://localhost:3000/users`);
    const text = await res.text();

    if (res.ok) {
      return text;
    } else {
      throw new Error(text);
    }
  }

  onMount(async () => {
    promiseLoadingUsers = getUsers();
  })
</script>
<div class="container">
    <div class="messaging">
          <div class="inbox_msg">
            <div class="inbox_people">
              <div class="headind_srch">
                <div class="recent_heading">
                  <h4>Recent</h4>
                </div>
                <div class="srch_bar">
                  <div class="stylish-input-group">
                    <input type="text" class="search-bar"  placeholder="Search" >
                    <span class="input-group-addon">
                    <button type="button"> <i class="fa fa-search" aria-hidden="true"></i> </button>
                    </span> </div>
                </div>
              </div>
              <div class="inbox_chat">


                {#await promiseLoadingUsers}
                  <p>...loading users</p>
                {:then number}
                  
                
                  {#each [1,2,3,4,5,6,7,8] as user}
                    <UserItem/>
                  {/each}


                {:catch error}
                  <p style="color: red">{error.message}</p>
                {/await}

       


              </div>
            </div>

          </div>
    </div>
</div>

<!-- UserItem -->
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