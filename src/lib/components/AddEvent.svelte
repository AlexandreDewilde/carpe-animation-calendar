<script>
    export let categories;

    // Can be used to perform validation on the frontend later
    let name = "";
    let description = "";
    let place = "";
    let category = 0;
    let organizer = "";
    let email = "";
    let price = 0;
    let start = "";
    let end = "";
</script>

<section>
    <form method="post">
        <section class="form">

            <label for="event-name">Nom</label>
            <input type="text" id="event-name" name="event-name" placeholder="Nom" bind:value={name}/>

            <label for="event-description">Description</label>
            <textarea id="event-description" name="event-description" placeholder="Description" bind:value={description}/>

            <label for="event-place">Lieu</label>
            <input type="text" id="event-place" name="event-place" placeholder="Centre placet" bind:value={place}/>

            <label for="event-category">Categorie</label>
            <select id="event-category" name="event-category" bind:value={category}>
                {#each categories as category}
                    <option value={category.id}>{category.name}</option>
                {/each}
            </select>

            <label for="event-organizer">Organisateur</label>
            <input type="text" id="event-organizer" name="event-organizer" placeholder="CarpeStudentem" bind:value={organizer}/>

            <label for="event-email">Email</label>
            <input type="email" id="event-email" name="event-email" placeholder="carpestudentem@gmail.com" bind:value={email}/>

            <label for="event-price">Prix</label>
            <input type="number" step="0.01" min="0" id="event-price" name="event-price" placeholder="0" bind:value={price}/>

            <label for="event-start">Début de l'évènement</label>
            <input
                type="datetime-local"
                id="event-start"
                name="event-start"
                bind:value={start}
            />

            <label for="event-end">Fin de l'évènement</label>
            <input
                    type="datetime-local"
                    id="event-end"
                    name="event-end"
                    bind:value={end}
            />

            <input type="submit" value="Soumettre"/>
        </section>
    </form>
</section>

<style>
    .form {
        display: flex;
        flex-direction: column;
        margin: 10px;
    }

    input {
        border-radius: 3px;
    }
</style>
