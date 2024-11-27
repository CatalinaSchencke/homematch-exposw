<template>
    <div class="pb-10 lg:pb-0  w-screen">
        <div class="grid w-full justify-center space-y-6 items-center place-content-center h-[80%]">
            <!-- Barra de progreso -->
            <div class="flex justify-center">
                <div class="inline-flex gap-2 items-center py-5">
                    <p class="px-3 py-1 rounded-full outline outline-2 outline-[#1C83CD] text-[#1C83CD]">1</p>
                    <p class="text-md text-[#1C83CD]">Tus preferencias</p>
                    <Icon name="material-symbols-light:arrow-forward-ios-rounded" class="text-gray" />
                    <p class="px-3 py-1 rounded-full outline outline-2 outline-gray-400 text-gray-400">2</p>
                    <Icon name="material-symbols-light:arrow-forward-ios-rounded" class="text-gray" />
                    <p class="px-3 py-1 rounded-full outline outline-2 outline-gray-400 text-gray-400">3</p>
                    <Icon name="material-symbols-light:arrow-forward-ios-rounded" class="text-gray" />
                    <p class="px-3 py-1 rounded-full outline outline-2 outline-gray-400 text-gray-400">4</p>
                </div>
            </div>
            <!-- Select persona (1 o 2) -->

            <div class="grid grid-cols-1 justify-center gap-6 w-[80%] items-center mx-auto">
                <div>
                    <label for="persona"
                        class="block font-semibold mb-2 text-sm w-full mx-auto text-gray-900">Selecciona tu
                        persona</label>
                    <select id="persona"
                        class="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg py-1 px-4 w-full">
                        <option value="persona1">Persona 1</option>
                        <option value="persona2">Persona 2</option>
                    </select>
                </div>
            </div>
            <!-- Formulario -->
            <div class="grid grid-cols-1 md:grid-cols-2 justify-center gap-6 min-w-[60vw]">
                <!-- Parte izquierda -->
                <div class="grid grid-cols-1 justify-start gap-8 w-full">
                    <!-- Edad -->
                    <div>
                        <label for="user_age" class="block mb-2 text-sm text-gray-900">Tu edad</label>
                        <input v-model="edad" type="text" id="user_age" placeholder="Ingresa tu edad"
                            class="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg py-2 px-4 w-full" />
                    </div>

                    <!-- Estudiante y mascotas -->
                    <div class="grid grid-cols-2  items-center gap-2 mt-3">

                        <div>
                            <label class="block text-sm text-gray-900">¿Eres estudiante?</label>
                            <div class="flex items-center gap-3">
                                <label class="flex items-center">
                                    <input type="radio" value="1" v-model="estudiante"
                                        class="w-4 h-4 text-[#1C83CD] bg-gray-100 border-gray-300" />
                                    <span class="ml-2 text-sm text-gray-900">Sí</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="radio" value="0" v-model="estudiante"
                                        class="w-4 h-4 text-[#1C83CD] bg-gray-100 border-gray-300" />
                                    <span class="ml-2 text-sm text-gray-900">No</span>
                                </label>
                            </div>
                        </div>
                        <div>
                            <label class="block text-sm text-gray-900">¿Tienes Mascotas?</label>
                            <div class="flex items-center gap-3">
                                <label class="flex items-center">
                                    <input type="radio" value="1" v-model="tieneMascotas"
                                        class="w-4 h-4 text-[#1C83CD] bg-gray-100 border-gray-300" />
                                    <span class="ml-2 text-sm text-gray-900">Sí</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="radio" value="0" v-model="tieneMascotas"
                                        class="w-4 h-4 text-[#1C83CD] bg-gray-100 border-gray-300" />
                                    <span class="ml-2 text-sm text-gray-900">No</span>
                                </label>
                            </div>
                        </div>

                    </div>

                    <!-- Género -->
                    <div>
                        <label for="gender" class="block mb-2 text-sm text-gray-900">Género</label>
                        <select id="gender" v-model="genero"
                            class="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg py-2 px-4 w-full">
                            <option value="-1">Elige un género</option>
                            <option value="0">Hombre</option>
                            <option value="1">Mujer</option>
                        </select>
                    </div>
                </div>

                <!-- Parte derecha -->
                <div class="grid grid-cols-1 justify-start h-full lg:mt-2 lg:gap-8">
                    <div class="">
                        <MultiRange :min="18" :max="100" @updateValues="updateMultiRangeValues" />
                    </div>
                    <div class="mt-5">
                        <label class="block text-sm text-gray-900">¿Aceptarías vivir con otras mascotas?</label>
                        <div class="flex items-center gap-3">
                            <label class="flex items-center">
                                <input type="radio" value="1" v-model="aceptaMascotas"
                                    class="w-4 h-4 text-[#1C83CD] bg-gray-100 border-gray-300" />
                                <span class="ml-2 text-sm text-gray-900">Sí</span>
                            </label>
                            <label class="flex items-center">
                                <input type="radio" value="0" v-model="aceptaMascotas"
                                    class="w-4 h-4 text-[#1C83CD] bg-gray-100 border-gray-300" />
                                <span class="ml-2 text-sm text-gray-900">No</span>
                            </label>
                        </div>
                    </div>
                    <!-- Género -->
                    <div class="lg:mt-0 mt-6">
                        <label for="roomie-gender" class="block mb-2 text-sm text-gray-900">Preferencia de género de
                            compañero de vivienda</label>
                        <select id="roomie-gender" v-model="generoCompañero"
                            class="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg py-2 px-4 w-full">
                            <option value="-1">Elige un género</option>
                            <option value="0">Hombre</option>
                            <option value="1">Mujer</option>
                            <option value="2">Ambos</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="flex justify-around">
                <div></div>
                <button @click="guardarYContinuar"
                    class="bg-[#1C83CD] text-white text-sm rounded-lg w-32 py-2 px-4 mt-5">Siguiente</button>
            </div>
        </div>

    </div>
</template>
<script setup lang="ts">
import Multirange from '~/components/Multirange.vue';
import { ref } from 'vue';
import { useRespuestasStore } from '~/stores/respuestas';
import { useRouter } from 'vue-router';

const store = useRespuestasStore();
const router = useRouter();

const edad = ref(null);
const edadCompañeroMin = ref(18);
const edadCompañeroMax = ref(100);
const estudiante = ref('0');
const tieneMascotas = ref('0');
const aceptaMascotas = ref('0');
const genero = ref('-1');
const generoCompañero = ref('-1');

const updateMultiRangeValues = (values: { min: number; max: number }) => {
    edadCompañeroMin.value = values.min;
    edadCompañeroMax.value = values.max;
};

const guardarYContinuar = async () => {
    const preferencias = {
        edad: edad.value,
        edadCompañeroMin: edadCompañeroMin.value,
        edadCompañeroMax: edadCompañeroMax.value,
        estudiante: estudiante.value,
        tieneMascotas: tieneMascotas.value,
        aceptaMascotas: aceptaMascotas.value,
        genero: genero.value,
        generoCompañero: generoCompañero.value,
    };

    // // Enviar al backend
    // const response = await fetch('http://backend/python/vectorizar', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(preferencias),
    // });

    // const data = await response.json();

    // Guardar la respuesta en la store
    // store.guardarRespuestaBackend('persona1', data);
    store.guardarPreferencias1(persona.value, preferencias);
    console.log(store.getPreferencias1(persona.value));


    router.push('/seccion2'); // Cambiar a la siguiente página
};
</script>