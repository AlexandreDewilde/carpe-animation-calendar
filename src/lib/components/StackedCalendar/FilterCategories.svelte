<script>
    export let categories;
    /**
     * @type {Object}
     */
    export let checked;
</script>

<section>
    {#each categories as category}
        <input type="checkbox" id={category.id} name="{category.id}" bind:checked={checked[category.id]}/>
        <label for={category.id}>{category.name}</label>
    {/each}
</section>
