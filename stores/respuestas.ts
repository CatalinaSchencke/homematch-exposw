import { defineStore } from 'pinia';

export const useRespuestasStore = defineStore('respuestas', () => {
  const state = reactive({
    persona1: {
      preferencias1: {},
      preferencias2: {},
      filtros: {},
      hipoteticas: [] as number[],
    },
    persona2: {
        preferencias1: {},
        preferencias2: {},
      filtros: {},
      hipoteticas: [],
    },
  });

  function guardarPreferencias1(persona: 'persona1' | 'persona2', datos: any) {
    state[persona].preferencias1 = datos;
  }
  function guardarPreferencias2(persona: 'persona1' | 'persona2', datos: any) {
    state[persona].preferencias2 = datos;
  }

  function guardarFiltros(persona: 'persona1' | 'persona2', datos: any) {
    state[persona].filtros = datos;
  }

  function guardarHipoteticas(persona: 'persona1' | 'persona2', respuestas: number[]) {
    state[persona].hipoteticas = respuestas;
  }

  const getPreferencias1 = (persona: 'persona1' | 'persona2') => state[persona].preferencias1;
    const getPreferencias2 = (persona: 'persona1' | 'persona2') => state[persona].preferencias2;
  const getFiltros = (persona: 'persona1' | 'persona2') => state[persona].filtros;
  const getHipoteticas = (persona: 'persona1' | 'persona2') => state[persona].hipoteticas;

  return { state, guardarPreferencias1, guardarPreferencias2, guardarFiltros, guardarHipoteticas, getPreferencias1, getPreferencias2, getFiltros, getHipoteticas };
});
