<script>
    const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimance"];
</script>

<tr>
    {#each days as day}
        <th>{day}</th>
    {/each}
</tr>

<style>
    th {
        padding: 10px;
    }
</style>