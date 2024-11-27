<template>
    <div class="grid gap-3 min-w-full">
        <label class="block mb-2 text-sm text-gray-900">Edad de tu compañero de vivienda</label>
        <div class="container w-full">

            <input type="range" :min="min" :max="max" v-model="minVal" @input="emitValues" class="thumb thumb--left" />
            <input type="range" :min="min" :max="max" v-model="maxVal" @input="emitValues" class="thumb thumb--right" />
            <div class="slider">
                <div class="slider__track"></div>
                <div ref="range" class="slider__range"></div>
                <div class="slider__left-value">{{ minVal }}</div>
                <div class="slider__right-value">{{ maxVal }}</div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref, watch, onMounted } from "vue";

const props = defineProps({
    min: {
        type: Number,
        required: true,
        default: 18,
    },
    max: {
        type: Number,
        required: true,
        default: 65,
    },
});

// Valores reactivos
const minVal = ref(props.min);
const maxVal = ref(props.max);
const range = ref(null);

// Convertir valor a porcentaje
const getPercent = (value) => {
    return Math.round(((value - props.min) / (props.max - props.min)) * 100);
};

// Actualizar rango visual al cambiar minVal o maxVal
const updateRange = () => {
    if (range.value) {
        const minPercent = getPercent(minVal.value);
        const maxPercent = getPercent(maxVal.value);
        range.value.style.left = `${minPercent}%`;
        range.value.style.width = `${maxPercent - minPercent}%`;
    }
};

// Eventos de cambio
const onMinChange = () => {
    if (minVal.value >= maxVal.value) {
        minVal.value = maxVal.value - 1;
    }
    updateRange();
};

const onMaxChange = () => {
    if (maxVal.value <= minVal.value) {
        maxVal.value = minVal.value + 1;
    }
    updateRange();
};

// Actualizar rango visual al montar el componente
onMounted(() => {
    updateRange();
});
// Emitir los valores al componente padre
const emit = defineEmits(['updateValues']);

const emitValues = () => {
    emit('updateValues', { min: minVal.value, max: maxVal.value });
};


watch([minVal, maxVal], updateRange);
</script>

<style scoped>
.container {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: start;
}

.slider {
    position: relative;
    width: 200px;
}

.slider__track,
.slider__range,
.slider__left-value,
.slider__right-value {
    position: absolute;
}

.slider__track,
.slider__range {
    border-radius: 3px;
    height: 5px;
}

.slider__track {
    background-color: #959595;
    width: 100%;
    z-index: 1;
}

.slider__range {
    background-color: #1C83CD;
    z-index: 2;
}

.slider__left-value,
.slider__right-value {
    color: #303030;
    font-size: 12px;
    margin-top: 20px;
}

.slider__left-value {
    left: 6px;
}

.slider__right-value {
    right: -4px;
}

/* Removing the default appearance */
.thumb,
.thumb::-webkit-slider-thumb {
    -webkit-appearance: none;
}

.thumb {
    pointer-events: none;
    position: absolute;
    height: 0;
    width: 200px;
    outline: none;
}

.thumb--left {
    z-index: 3;
}

.thumb--right {
    z-index: 4;
}

/* For Chrome browsers */
.thumb::-webkit-slider-thumb {
    background-color: #f1f5f7;
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 1px 1px #ced1da;
    cursor: pointer;
    height: 18px;
    width: 18px;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
}

/* For Firefox browsers */
.thumb::-moz-range-thumb {
    background-color: #f1f5f7;
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 1px 1px #ced4da;
    cursor: pointer;
    height: 18px;
    width: 18px;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
}
</style>