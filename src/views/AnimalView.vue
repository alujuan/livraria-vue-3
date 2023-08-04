<script>
import AnimaisApi from "@/api/animais";
const animaisApi = new AnimaisApi();
export default {
  data() {
    return {
      animais: [],
      animal: {},
    };
  },
  async created() {
    this.animais = await animaisApi.buscarTodosOsAnimais();
  },
  methods: {
    async salvar() {
      if (this.animal.id) {
        await animaisApi.atualizarAnimal(this.animal);
      } else {
        await animaisApi.adicionarAnimal(this.animal);
      }
      this.animal = {};
      this.animais = await animaisApi.buscarTodosOsAnimais();
    },
    editar(animal) {
      Object.assign(this.animal, animal);
    },
    async excluir(animal) {
      await animaisApi.excluirAnimal(animal.id);
      this.animais = await animaisApi.buscarTodosOsAnimais();
    },
  },
};
</script>

<template>
  <h1>Animal</h1>
  <hr />
  <div class="form">
    <input type="text" v-model="animal.nome" placeholder="nome" />
    <input type="text" v-model="animal.nome_dono" placeholder="nome do dono" />
    <input type="text" v-model="animal.raca" placeholder="raça" />
    <input type="text" v-model="animal.genero" placeholder="genero" />
    <button @click="salvar">Salvar</button>
  </div>
  <hr />
  <ul>
    <li v-for="animal in animais" :key="animal.id">
      <span @click="editar(animal)">
        ({{ animal.id }}) - {{ animal.nome }} -
      </span>
      <button @click="excluir(animal)">X</button>
    </li>
  </ul>
</template>

<style></style>
