<template>
    <div class="pb-10 lg:pb-0  w-screen">
        <div class="grid w-full justify-center space-y-4 items-center place-content-center h-[80%]">
            <!-- Barra de progreso -->
            <div class="flex justify-center">
                <div class="inline-flex gap-2 items-center py-5">
                    <p class="px-3 py-1 rounded-full outline outline-2 outline-[#1C83CD] text-[#1C83CD]">1</p>
                    <Icon name="material-symbols-light:arrow-forward-ios-rounded" class="text-[#1C83CD]" />
                    <p class="px-3 py-1 rounded-full outline outline-2 outline-[#1C83CD] text-[#1C83CD]">2</p>
                    <Icon name="material-symbols-light:arrow-forward-ios-rounded" class="text-[#1C83CD]" />
                    <p class="px-3 py-1 rounded-full outline outline-2 outline-[#1C83CD] text-[#1C83CD]">3</p>

                    <p class="text-md text-[#1C83CD]">Cuestionario</p>
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
            <h1 class="text-2xl text-[#1C83CD] font-semibold mx-auto py-3">Situaciones Hipotéticas</h1>
            <!-- Formulario -->
            <div class="grid grid-cols-1 md:grid-cols-2 justify-center gap-6 min-w-[60vw] w-full">
                <!-- Parte izquierda -->
                <div class="grid grid-cols-1 justify-start gap-8 max-w-[400px]">
                    <div>
                        <label class="block text-sm text-gray-900 mb-3">Es domingo por la mañana, estás en casa y tu
                            compañero pone música a todo volumen. ¿Qué harías?</label>
                        <div class="grid items-center gap-3">
                            <label class="flex items-center">
                                <input type="radio" value="0" v-model="p1"
                                    class="w-4 h-4 text-[#1C83CD] bg-gray-100 border-gray-300" />
                                <span class="ml-2 text-sm text-gray-900">Le pediría que baje el volumen</span>
                            </label>
                            <label class="flex items-center">
                                <input type="radio" value="1" v-model="p1"
                                    class="w-4 h-4 text-[#1C83CD] bg-gray-100 border-gray-300" />
                                <span class="ml-2 text-sm text-gray-900">Me pondría audífonos y lo ignoraría</span>
                            </label>
                            <label class="flex items-center">
                                <input type="radio" value="2" v-model="p1"
                                    class="w-4 h-4 text-[#1C83CD] bg-gray-100 border-gray-300" />
                                <span class="ml-2 text-sm text-gray-900">Me uniría a la música si es de mi gusto</span>
                            </label>
                            <label class="flex items-center">
                                <input type="radio" value="3" v-model="p1"
                                    class="w-4 h-4 text-[#1C83CD] bg-gray-100 border-gray-300" />
                                <span class="ml-2 text-sm text-gray-900">Me molestaría, pero no diría nada.</span>
                            </label>
                        </div>
                    </div>


                </div>

                <!-- Parte derecha -->
                <div class="grid grid-cols-1  max-w-[400px] ">
                    <div>
                        <label class="block text-sm text-gray-900 mb-3">Tu compañero de vivienda organiza una reunión
                            sin avisarte. ¿Cómo reaccionas?</label>
                        <div class="grid items-center gap-3">
                            <label class="flex items-center">
                                <input type="radio" value="0" v-model="p2"
                                    class="w-4 h-4 text-[#1C83CD] bg-gray-100 border-gray-300" />
                                <span class="ml-2 text-sm text-gray-900">Le pido que me avise con anticipación la
                                    próxima vez</span>
                            </label>
                            <label class="flex items-center">
                                <input type="radio" value="1" v-model="p2"
                                    class="w-4 h-4 text-[#1C83CD] bg-gray-100 border-gray-300" />
                                <span class="ml-2 text-sm text-gray-900">Me uno a la reunión</span>
                            </label>
                            <label class="flex items-center">
                                <input type="radio" value="2" v-model="p2"
                                    class="w-4 h-4 text-[#1C83CD] bg-gray-100 border-gray-300" />
                                <span class="ml-2 text-sm text-gray-900">No me importa, mientras no sea frecuente</span>
                            </label>
                            <label class="flex items-center">
                                <input type="radio" value="3" v-model="p2"
                                    class="w-4 h-4 text-[#1C83CD] bg-gray-100 border-gray-300" />
                                <span class="ml-2 text-sm text-gray-900">Me molestaría porque valoro mi espacio
                                    tranquilo.</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-around">
                <div></div>
                <button @click="guardarYContinuar"
                    class="bg-[#1C83CD] text-white text-sm rounded-lg w-32 py-2 px-4 mt-5">Siguiente</button>
            </div>
            <Section4 v-if="mostrarSection4" :p1="p1" :p2="p2" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Section4 from './Section4.vue';

const persona = ref('persona1');
const p1 = ref('');
const p2 = ref('');
const mostrarSection4 = ref(false);

const guardarYContinuar = async () => {
    const respuestas = {
        persona: persona.value,
        p1: p1.value,
        p2: p2.value,
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

    mostrarSection4.value = true;
};
</script>