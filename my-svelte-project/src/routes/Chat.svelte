<script>
  import {fade} from 'svelte/transition'
  import {afterUpdate} from 'svelte';
  import {push, pop, replace} from 'svelte-spa-router'

  import MessageForm from '../components/MessageForm.svelte'
  import Message from '../components/Message.svelte'

  import {userStore} from '../store/user';

  export let params = {};

  const addMessage = ({detail}) => {
    // console.log(detail.message)
    msgs = [...msgs, {
      body: detail.message,
      time: 'Just now'
    }]
  }

  ///logic for scroll
  let messagesListContainer;
  const scroll = () => {
        if(!messagesListContainer || !messagesListContainer.lastElementChild) return;
        messagesListContainer.lastElementChild.scrollIntoView({
            behavior: 'smooth',
            block: 'end'
        });
    }

    afterUpdate(() => {
        scroll();
    })



  let msgs = [
  {
    "userId": 1,
    "id": 1,
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    "time":  "11:01 AM    |    June 9"
  },
  {
    "userId": 1,
    "id": 2,
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    "time":"11:01 AM    |    June 9"
  },
  {
    "userId": 1,
    "id": 3,
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    "time":"11:01 PM    |    Yesterday"
  },
  {
    "userId": 1,
    "id": 4,
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
    "time":"8:23 AM    |    Today"
  },
  {
    "userId": 1,
    "id": 5,
    "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
    "time":"9:01 AM    |    Today"
  },
  {
    "userId": 1,
    "id": 6,
    "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
    "time":"9:35 AM    |    Today"
  },
  {
    "userId": 1,
    "id": 7,
    "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
    "time":"10:00 AM    |    Today"
  },
  {
    "userId": 1,
    "id": 8,
    "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
    "time":"10:30 AM    |    Today"
  },
  {
    "userId": 1,
    "id": 9,
    "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
    "time":"10:41 AM    |    Today"
  },
  {
    "userId": 1,
    "id": 10,
    "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
    "time":"11:01 AM    |    Today"
  }
]
</script>
<div class="container user-name" in:fade="{{duration: 500}}">
    <div class="messaging">
      <div class="inbox_msg">
        <div class="mesgs">
          <div class="headind_srch">
            <div class="recent_heading ">
              <button type="button" class="arrow-back"
              on:click={() => push('/users')}>
                <i class="fa fa-arrow-left" aria-hidden="true"></i>
              </button>
              <h4>{$userStore}</h4>
            </div>
          </div>
          <div class="msg_history" bind:this={messagesListContainer}>

            {#each msgs as message, index}
                <Message message={message} side={index%2!=0}/>
            {/each}
      

          </div>
          
          <MessageForm on:message={addMessage}/>
        </div>
      </div>
    </div>
  </div>