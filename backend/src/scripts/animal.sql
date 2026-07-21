CREATE TABLE animal(
    id SERIAL PRIMARY KEY,
    nome VARCHAR(30) NOT NULL,
    especie VARCHAR(50) NOT NULL,
    idade INT,
    status_saude VARCHAR(50) DEFAULT 'Saudável!'
);

INSERT INTO public.animal(
	id, nome, especie, idade, status_saude)
VALUES 
	(1, 'Miau', 'Gato', 4, 'Saudável'),
	(2, 'Rex', 'Cachorro', 3, 'Saudável'),
	(3, 'Thor', 'Cachorro', 6, 'Saudável'),
	(4, 'Luna', 'Gato', 2, 'Saudável'),
	(5, 'Louro', 'Papagaio', 12, 'Saudável'),
	(6, 'Pingo', 'Coelho', 1, 'Saudável'),
	(7, 'Mel', 'Cachorro', 5, 'Saudável'),
	(8, 'Felix', 'Gato', 8, 'Saudável'),
	(9, 'Bibs', 'Hamster', 1, 'Saudável'),
	(10, 'Frederico', 'Tartaruga', 7, 'Saudável');