<script>
	import Router from 'svelte-spa-router'
	import {wrap} from 'svelte-spa-router/wrap'
	
	import Header from './components/Header.svelte'

	import Login from './routes/Login.svelte'
	import Users from './routes/Users.svelte'
	import Chat from './routes/Chat.svelte'
	import NotFound from './routes/NotFound.svelte'

		const routes = {
			'/': Login,
			'/chat/:chatid': Chat,
			'/users': Users,
	// 		wrap({
    //     asyncComponent: () => import('./routes/Book.svelte')
    // }),
			'*': NotFound,
		}

	export let name;
</script>

<main>
	<Header/>
	<Router {routes}/>
</main>

<style>

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>