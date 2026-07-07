import animalRepository from '../repositories/animalRepository.js';

export const animalService = {
    async getAllAnimals() {
        return await animalRepository.getAllAnimals();
    },

    async createAnimal(animalRequisicao) {
        if(animalRequisicao.idade<0) {
            throw new Error("a idade do animal tem que ser maior do que 0");
        }
        return await animalRepository.create(animalRequisicao);
    },

    async updateAnimal(id, animalRequisicao) {
        const animalExistetnte = await animalRepository.findById(id);
        if (!animalExistetnte) {
            throw new Error("Animal não encontrado");
        }
        return await animalRepository.update(id, animalRequisicao);
    
    }
}