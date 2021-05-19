<script>
    import {link} from 'svelte-spa-router'
</script>
<ul class="nav">
    <li class="nav-item">
        <a class="nav-link" href="/chat/321" use:link>chat</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="/users" use:link>users</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="/" use:link>login</a>
    </li>
</ul>