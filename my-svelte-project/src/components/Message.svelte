<script>
  export let message;
  export let side;
</script>
<div class:incoming_msg={side} class:outgoing_msg={!side}>
    <div class:received_msg={side} class:sent_msg={!side}>
      <p>{message.body}</p>
      <span class="time_date">{message.time}</span>
  </div>
</div>