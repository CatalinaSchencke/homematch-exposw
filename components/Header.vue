<template>
    <header class=" flex justify-center lg:justify-normal lg:block">

        <nav class="flex justify-center px-6 lg:px-20 py-6 items-center lg:flex" id="left-group">
            <nuxt-link to="/">
                <NuxtImg src="/logo.svg" alt="HomeMatch logo" width="150" height="0" placeholder />
            </nuxt-link>
        </nav>
    </header>
</template>
<script setup>
const dropdownVisible = ref(false)
const toggleDropdown = () => {
    dropdownVisible.value = !dropdownVisible.value
}
</script>