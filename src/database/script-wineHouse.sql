CREATE DATABASE wine_house;
USE wine_house;

CREATE TABLE clientes(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(90) NOT NULL,
email VARCHAR(45) NOT NULL UNIQUE,
senha VARCHAR(6) NOT NULL
);

CREATE TABLE fornecedor(
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
nome VARCHAR(45) NOT NULL,
email VARCHAR(45) NOT NULL UNIQUE,
senha VARCHAR(6) NOT NULL
);

CREATE TABLE produto(
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
nome VARCHAR(45) NOT NULL,
valor INT NOT NULL,
categoria VARCHAR(150) NOT NULL,
imagem VARCHAR(150) NOT NULL,
fornecedores_id INT UNSIGNED NOT NULL,
FOREIGN KEY(fornecedores_id) REFERENCES fornecedores(id)
);

CREATE TABLE pedido(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
data_criacao DATE NOT NULL,
valor_unitario INT NOT NULL,
quantidade INT NOT NULL,
clientes_id INT UNSIGNED NOT NULL,
produtos_id INT UNSIGNED NOT NULL,
FOREIGN KEY (clientes_id) REFERENCES clientes(id),
FOREIGN KEY (produtos_id) REFERENCES produtos(id)
);

SELECT * FROM clientes;
INSERT INTO clientes(nome, email, senha)
VALUES
('Keyla', 'keyla@gmail.com', 123456),
('Rodrigo', 'rodrigo@gmail.com', 003456),
('Matheus', 'matheus@gmail.com', 48456),
('Catia', 'catia@gmail.com', 12384456),
('Sandra', 'sandra@gmail.com', 008443456),
('Keyla', 'keyla_santos@gmail.com', 484003456),
('Pedro', 'pedro@gmail.com', 12345486),
('Rodrigo', 'rodrigo_cardoso@gmail.com', 00344485456),
('Matheus', 'matheus_oliveira@gmail.com', 45844003456);


INSERT INTO fornecedores( nome, email, senha)
VALUES
	('Vínicula Rio do Sol', 'rioSol@gmail.com', 999999),
	('Vínicula Terra Nova', 'terraNova@gmail.com', 333333),
    ('Vínicula Alves', 'viniculaAlves@gmail.com', 985484);

INSERT INTO produtos(nome,valor,tipo,imagem,fornecedores_id)
VALUES
	('Barone Montalto',88.00,'Vinho Tinto','1-barone-montalto',1),
	('Cassilo del Diablo',95.00,'Vinho Tinto Seco','1-barone-montalto',3),
    ('Cavalera',50.00,'Vinho Suave','1-barone-montalto',2),
	('Lamiento del Gato',45.00,'Champanhe','1-barone-montalto',2),
    ('Sidreira del Caminõ',158.00,'Champanhe','1-barone-montalto',3),
	('Las Pantuvas del Conde',200.00,'Vinho Suave','1-barone-montalto',1);

INSERT INTO pedidos(data_criacao,valor_unitario,quantidade,clientes_id,produtos_id)
VALUES ('2023-02-06',88.00,1,1,4);


