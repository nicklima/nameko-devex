<script lang="ts">
	export let error: string = ''
</script>

<small
	class="
        text-red-400
        transition-all
        {!!error
		? `
            visible
            translate-x-0
            `
		: `
            invisible
            opacity-0
            -translate-x-5
        `}
    ">{error}</small
>
