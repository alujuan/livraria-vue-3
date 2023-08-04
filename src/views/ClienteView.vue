<script>
import ClientesApi from "@/api/clientes";
const clientesApi = new ClientesApi();
export default {
  data() {
    return {
      clientes: [],
      cliente: {},
    };
  },
  async created() {
    this.clientes = await clientesApi.buscarTodosOsClientes();
  },
  methods: {
    async salvar() {
      if (this.cliente.id) {
        await clientesApi.atualizarCliente(this.cliente);
      } else {
        await clientesApi.adicionarCliente(this.cliente);
      }
      this.cliente = {};
      this.clientes = await clientesApi.buscarTodosOsClientes();
    },
    editar(cliente) {
      Object.assign(this.cliente, cliente);
    },
    async excluir(cliente) {
      await clientesApi.excluirCliente(cliente.id);
      this.clientes = await clientesApi.buscarTodosOsClientes();
    },
  },
};
</script>

<template>
  <h1>cliente</h1>
  <hr />
  <div class="form">
    <input type="text" v-model="cliente.nome" placeholder="nome" />
    <input type="number" v-model="cliente.cpf" placeholder="cpf" />
    <input type="number" v-model="cliente.tel" placeholder="telefone" />
    <input type="email" v-model="cliente.email" placeholder="email" />
    <button @click="salvar">Salvar</button>
  </div>
  <hr />
  <ul>
    <li v-for="cliente in clientes" :key="cliente.id">
      <span @click="editar(cliente)">
        ({{ cliente.id }}) - {{ cliente.nome }} -
      </span>
      <button @click="excluir(cliente)">X</button>
    </li>
  </ul>
</template>

<style></style>
