<template>
    <div class="bg-[#ECF5FB] py-16 px-10">

        <div class="flex flex-col gap-10 justify-around lg:items-end lg:flex-row items-center">
            <div class="flex flex-col items-center text-center lg:items-start lg:text-start">
                <NuxtImg class="mb-4 lg:mb-6" src="/logo.svg" alt="HomeMatch logo" width="250" placeholder />
                <div class="text-sm font-medium">
                    <p>Región de Valparaíso, Chile</p>
                    <div class="flex items-center gap-x-1">
                        <Icon name="material-symbols:mail-outline" class="text-xl" />
                        <p>
                            contacto@homematch.cl
                        </p>
                    </div>
                </div>
            </div>
            <div class="font-medium">
                <p>Siguenos</p>
                <div class="flex gap-x-2 justify-start items-center text-primary">
                    <a target="_blank" href="https://www.facebook.com/roommycl">
                        <Icon name="ion:social-facebook" class="text-3xl" />
                    </a>
                    <a target="_blank" href="https://www.instagram.com/homematch.cl/">
                        <Icon name="ion:logo-instagram" class="text-2xl" />
                    </a>
                </div>
            </div>
            <div class="font-medium">
                <p class="mb-3 text-lg">Suscribete a nuestro boletín informativo</p>
                <div class="bg-white px-5 py-3 flex rounded-xl">
                    <input type="text" class="font-normal outline-none w-full"
                        placeholder="Ingresa tu correo electrónico" />
                    <button class="rounded-full bg-primary p-2">
                        <Icon name="material-symbols:arrow-forward-rounded" class="text-2xl text-white" />
                    </button>
                </div>
            </div>
        </div>

    </div>
</template>