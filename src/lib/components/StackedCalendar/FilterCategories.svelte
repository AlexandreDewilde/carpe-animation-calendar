<script>
    export let categories;
    export let checked;
</script>

<section class="checkbox-container">
    {#each categories as category}
        <input type="checkbox" id={category.id} name="{category.id}" bind:checked={checked[category.id]}/>
        <label for={category.id}>{category.name}</label>
    {/each}
</section>

<style>
    .checkbox-container {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin: 20px;
    }

    input[type="checkbox"] {
        display: none;
    }

    label {
        position: relative;
        padding-left: 30px;
        cursor: pointer;
        font-size: 16px;
        color: #001F3F;
    }

    label:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 20px;
        height: 20px;
        border: 2px solid #001F3F;
        background-color: white;
        border-radius: 4px;
        box-sizing: border-box;
        transition: background-color 0.3s;
    }

    input[type="checkbox"]:checked + label:before {
        background-color: #C52224;
        border-color: #C52224;
    }
</style>
