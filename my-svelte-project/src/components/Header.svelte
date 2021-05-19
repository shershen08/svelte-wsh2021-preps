<script>
    import {link} from 'svelte-spa-router'
</script>
<ul>
    <li>
        <a href="/chat/321" use:link>chat</a>
    </li>
    <li>
        <a href="/users/321" use:link>users</a>
    </li>
    <li>
        <a href="/" use:link>login</a>
    </li>
</ul>