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
            <div class="text-label">
                <label for="event-name">Nom</label>
                <input type="text" id="event-name" name="event-name" required bind:value={name}/>
            </div>

            <div class="text-label">
                <label for="event-description">Description</label>
                <textarea id="event-description" name="event-description" required bind:value={description}/>
            </div>

            <div class="text-label">
                <label for="event-place">Lieu</label>
                <input type="text" id="event-place" name="event-place" required bind:value={place}/>
            </div>

            <div class="text-label">
                <label for="event-category">Categorie</label>
                <select id="event-category" name="event-category" bind:value={category}>
                    {#each categories as category}
                    <option value={category.id}>{category.name}</option>
                    {/each}
                </select>
            </div>

            <div class="text-label">
                <label for="event-organizer">Organisateur</label>
                <input type="text" id="event-organizer" name="event-organizer" required bind:value={organizer}/>
            </div>
            <div class="text-label">
                <label for="event-email">Email</label>
                <input type="email" id="event-email" name="event-email" required bind:value={email}/>
            </div>
            <div class="text-label">
                <label for="event-price">Prix</label>
                <input type="number" step="0.01" min="0" id="event-price" name="event-price" required bind:value={price}/>
            </div>
            <div class="text-label">
                <label for="event-start">Début de l'évènement</label>
                <input
                type="datetime-local"
                id="event-start"
                name="event-start"
                bind:value={start}
                />
            </div>
            <div class="text-label">
                <label for="event-end">Fin de l'évènement</label>
                <input
                type="datetime-local"
                id="event-end"
                name="event-end"
                bind:value={end}
                />
            </div>
            <input type="submit" value="Soumettre"/>
        </section>
    </form>
</section>

<style>
    /* Part of the styles generated with chatgpt */
    .form {
        display: flex;
        flex-direction: column;
        margin: 10px;
        gap: 10px;
    }

    input,
    textarea,
    select {
        width: 100%;
        padding: 10px;
        margin: 5px 0;
        box-sizing: border-box;
        border: 1px solid #001F3F;
        border-radius: 4px;
        transition: border-color 0.3s;
    }

    input:focus,
    textarea:focus,
    select:focus {
        outline: none;
        border-color: #C52224;
    }

    label {
        color: #001F3F;
        font-size: 18px;
        font-weight: normal;
        margin-bottom: 5px;
        display: block;
    }

    input[type="submit"] {
        background-color: #C52224;
        color: white;
        padding: 15px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
        transition: background-color 0.3s;
    }

    input[type="submit"]:hover {
        background-color: #850909;
    }

    .text-label {
        margin: 10px 0;
        width: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
    }
</style>


