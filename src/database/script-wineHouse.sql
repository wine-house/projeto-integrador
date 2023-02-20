CREATE DATABASE wine_house;
USE wine_house;
CREATE TABLE cliente(
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
('Guilherme', 'guilherme@gmail.com', 123456);


INSERT INTO fornecedores( nome, email, senha)
VALUES
('Vínicula Rio do Sol', 'rioSol@gmail.com', 999999),
('Vínicula Terra Nova', 'terraNova@gmail.com', 333333);

INSERT INTO produtos(nome,valor,tipo,imagem,fornecedores_id)
VALUES
('Barone Montalto',88.00,'Vinho Tinto','1-barone-montalto',1);

INSERT INTO pedidos(data_criacao,valor_unitario,quantidade,clientes_id,produtos_id)
VALUES ('2023-02-06',88.00,1,1,4);


