<template>
    <div class="pb-10 lg:pb-0  w-screen">
        <div class="grid w-full justify-center space-y-6 items-center place-content-center h-[80%]">
            <!-- Barra de progreso -->
            <div class="flex justify-center">
                <div class="inline-flex gap-2 items-center py-5">
                    <p class="px-3 py-1 rounded-full outline outline-2 outline-[#1C83CD] text-[#1C83CD]">1</p>
                    <Icon name="material-symbols-light:arrow-forward-ios-rounded" class="text-[#1C83CD]" />
                    <p class="px-3 py-1 rounded-full outline outline-2 outline-[#1C83CD] text-[#1C83CD]">2</p>
                    <p class="text-md text-[#1C83CD]">Preferencias para vivir</p>
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
                    <select id="persona" v-model="persona"
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
                    <!-- Accesibilidad -->
                    <div>
                        <label class="block text-sm text-gray-900">¿Buscas un lugar accesible? (Discapacidad)</label>
                        <div class="flex items-center gap-3">
                            <label class="flex items-center">
                                <input type="radio" value="1" v-model="accesibilidad"
                                    class="w-4 h-4 text-[#1C83CD] bg-gray-100 border-gray-300" />
                                <span class="ml-2 text-sm text-gray-900">Sí</span>
                            </label>
                            <label class="flex items-center">
                                <input type="radio" value="0" v-model="accesibilidad"
                                    class="w-4 h-4 text-[#1C83CD] bg-gray-100 border-gray-300" />
                                <span class="ml-2 text-sm text-gray-900">No</span>
                            </label>
                        </div>
                    </div>

                    <!-- Estudiante y mascotas -->
                    <div class="grid   items-center gap-2 mt-3">
                        <div>
                            <label class="block text-sm text-gray-900">¿Modalidad de arriendo?</label>
                            <div class="flex items-center gap-3">
                                <label class="flex items-center">
                                    <input type="radio" value="0" v-model="modalidad"
                                        class="w-4 h-4 text-[#1C83CD] bg-gray-100 border-gray-300" />
                                    <span class="ml-2 text-sm text-gray-900">Por mes</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="radio" value="1" v-model="modalidad"
                                        class="w-4 h-4 text-[#1C83CD] bg-gray-100 border-gray-300" />
                                    <span class="ml-2 text-sm text-gray-900">Marzo-Diciembre</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="radio" value="2" v-model="modalidad"
                                        class="w-4 h-4 text-[#1C83CD] bg-gray-100 border-gray-300" />
                                    <span class="ml-2 text-sm text-gray-900">Año Corrido</span>
                                </label>
                            </div>
                        </div>

                    </div>

                    <!-- Comuna -->
                    <div>
                        <label for="gender" class="block mb-2 text-sm text-gray-900">Comuna</label>
                        <select id="gender" v-model="comuna"
                            class="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg py-2 px-4 w-full">
                            <option value="-1">Elige una comuna</option>
                            <option value="0">Valparaíso</option>
                            <option value="1">Viña del mar</option>
                            <option value="2">Concón</option>
                            <option value="3">Quilpué</option>
                            <option value="4">Villa Alemana</option>
                            <option value="5">Limache</option>
                            <option value="6">Quillota</option>
                            <option value="7">La Calera</option>
                        </select>
                    </div>
                </div>

                <!-- Parte derecha -->
                <div class="grid grid-cols-1 grid-rows-3">
                    <!-- Amoblado -->
                    <div>
                        <label class="block text-sm text-gray-900">¿Buscas un lugar amoblado?</label>
                        <div class="flex items-center gap-3">
                            <label class="flex items-center">
                                <input type="radio" value="1" v-model="amoblado"
                                    class="w-4 h-4 text-[#1C83CD] bg-gray-100 border-gray-300" />
                                <span class="ml-2 text-sm text-gray-900">Sí</span>
                            </label>
                            <label class="flex items-center">
                                <input type="radio" value="0" v-model="amoblado"
                                    class="w-4 h-4 text-[#1C83CD] bg-gray-100 border-gray-300" />
                                <span class="ml-2 text-sm text-gray-900">No</span>
                            </label>
                        </div>
                    </div>
                    <!-- Precio -->
                    <div class="">
                        <label class="block text-sm text-gray-900">¿Cuánto podrías pagar de arriendo? (Ej.
                            320000)</label>
                        <input type="number" v-model="precio"
                            class="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg py-2 px-4 w-full" />
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

const persona = ref('persona1');

const accesibilidad = ref(-1);
const modalidad = ref(-1);
const comuna = ref(-1);
const amoblado = ref(-1);
const precio = ref(0);

const guardarYContinuar = async () => {
    const preferencias = {
        amoblado: amoblado.value,
        accesibilidad: accesibilidad.value,
        modalidad: modalidad.value,
        comuna: comuna.value,
        precio: precio.value,
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
    store.guardarPreferencias2(persona.value, preferencias);
    console.log(store.getPreferencias2(persona.value));


    router.push('/seccion3'); // Cambiar a la siguiente página
};
</script>