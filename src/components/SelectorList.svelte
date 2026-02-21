<script lang="ts">
import { onMount } from "svelte";

type themes = "system" | "light" | "dark" | "";

export let currentTheme: themes = "";

const addThemeClass = (theme: themes) => {
	document.documentElement.removeAttribute("class");
	switch (theme) {
		case "system":
			document.documentElement.classList.add(getSystemTheme());
			break;
		case "dark":
			document.documentElement.classList.add("dark");
			break;
	}
};

$: isActiveTheme = (theme: themes) => {
	return currentTheme === theme;
};

const saveTheme = (theme: themes) => {
	localStorage.setItem("theme", theme);
};
const getSystemTheme = () => {
	const theme = window.matchMedia("(prefers-color-scheme: dark)").matches
		? "dark"
		: "light";
	return theme;
};

onMount(() => {
	const savedTheme = localStorage.getItem("theme") as themes | null;
	console.log({ savedTheme });
	const isGetSytemTheme = savedTheme === "system" || savedTheme === null;
	const theme = isGetSytemTheme ? getSystemTheme() : savedTheme;

	currentTheme = theme;
	addThemeClass(theme);
});
</script>

<menu>
	<li>
		<button
			class={ isActiveTheme('system') ? 'text-red-500' : 'text-blue-500'}
			on:click={() => {
				currentTheme = 'system';
				addThemeClass('system');
				saveTheme('system');
			}}
		>
			System
		</button>
	</li>
	<li>
		<button
			class= { isActiveTheme('light') ?  'text-red-500' : 'text-blue-500'}
			on:click={() => {
				currentTheme = 'light';
				addThemeClass('light');
				saveTheme('light');
			}}
			
		>
			Light
		</button>
	</li>
	<li>
		<button
			class={ isActiveTheme('dark') ?  'text-red-500' : 'text-blue-500'}
			on:click={() => {
				currentTheme = 'dark';
				addThemeClass('dark');
				saveTheme('dark');
			}}
			
		>
			Dark
		</button>
	</li>
</menu>
