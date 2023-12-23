<script>
    const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
</script>

<tr class="calendar-header">
    {#each days as day}
        <th>{day}</th>
    {/each}
</tr>

<style>
    th {
        padding: 15px;
        text-align: center;
        font-size: 16px;
    }
</style>
