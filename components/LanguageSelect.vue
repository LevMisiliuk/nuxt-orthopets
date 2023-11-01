<template>
    <div>
        <form>
            <select id="locale-select" v-model="$i18n.locale">
                <option value="en">
                    EN
                </option>
                <option value="ua">UA</option>
            </select>
        </form>
    </div>
</template>

<script>
export default {
    name: 'LanguageSelect',
}
</script>