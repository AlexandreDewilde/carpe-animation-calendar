<script>

</script>

<section>
    <form>
        <section class="form">

            <label for="event-title">Titre</label>
            <input type="text" id="event-title" name="event-title" placeholder="Titre"/>

            <label for="event-place">Lieu</label>
            <input type="text" id="event-place" name="event-place" placeholder="Centre placet"/>

            <label for="event-category">Categorie</label>
            <input type="text" id="event-category" name="event-category" placeholder="Arts"/>

            <label for="event-organizer">Organisateur</label>
            <input type="text" id="event-organizer" name="event-organizer" placeholder="CarpeStudentem"/>

            <label for="event-email">Email</label>
            <input type="text" id="event-email" name="event-email" placeholder="carpestudentem@gmail.com"/>

            <label for="event-price">Prix</label>
            <input type="text" id="event-price" name="event-price" placeholder="0"/>
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
