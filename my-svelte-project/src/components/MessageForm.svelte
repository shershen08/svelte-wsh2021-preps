<script>
  	import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    let message;

	function sendMessage() {
    
    if(!message) return ;

		dispatch('message', {
			message
		});

    message = ''
	}
</script>
<div class="type_msg">
    <div class="input_msg_write">
      <input type="text" class="write_msg" bind:value={message} placeholder="Type a message" />
      <button class="msg_send_btn" on:click={sendMessage} type="button"><i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>
    </div>
  </div>