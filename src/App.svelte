<script>
	import { flip } from "svelte/animate";
	import homoit from "./homoit.js";
	import { fade } from "svelte/transition";
	import { my_store } from "./stores.js";
	let items = [1, 2, 3];
	function shuffle() {
		items = items.sort(() => Math.random() - 0.5);
	}
	function add() {
		if (Number.isNaN(new_number)) {
			items = [new_number, ...items];
			new_number = undefined;
		} else {
			new_number = undefined;
		}
	}
	let new_number;
</script>

<main>
	<button on:click={shuffle}>Shuffle</button>
	<input
		type="number"
		bind:value={new_number}
		on:keydown={(e) => {
			if (e.key === "Enter") {
				add();
			}
		}}
	/>
	<button on:click={add}>Add</button>
	<div class="container">
		{#each items as item (item)}
			<div
				animate:flip={{ duration: 300 }}
				transition:fade={{ duration: 300 }}
				class="number"
			>
				<h1>{homoit(item)}={item}</h1>
			</div>
		{/each}
	</div>
	<h2>{$my_store}</h2>
</main>

<style>
	.container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}
	.number {
		margin: 10px;
	}
</style>
