import axios from 'axios';
export default class AnimaisApi {
  async buscarTodosOsAnimais() {
    const { data } = await axios.get('/animais/');
    return data;
  }
  async adicionarAnimal(animal) {
    const { data } = await axios.post('/animais/', animal);
    return data;
  }
  async atualizarAnimal(animal) {
    const { data } = await axios.put(`/animais/${animal.id}/`, animal);
    return data;
  }
  async excluirAnimal(id) {
    const { data } = await axios.delete(`/animais/${id}/`);
    return data;
  }
}
