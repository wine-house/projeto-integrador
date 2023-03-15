CREATE DATABASE wine_house;

USE wine_house;

CREATE TABLE clientes(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(90) NOT NULL,
email VARCHAR(45) NOT NULL UNIQUE,
cpf VARCHAR(11) NOT NULL UNIQUE,
data_nascimento DATE NOT NULL,
senha VARCHAR(10) NOT NULL
);

CREATE TABLE fornecedores(
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
nome VARCHAR(45) NOT NULL,
email VARCHAR(45) NOT NULL UNIQUE,
senha VARCHAR(10) NOT NULL
);

CREATE TABLE categorias(
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
nome VARCHAR(45) NOT NULL
);

INSERT INTO categorias(nome)
VALUES 
	("Tinto"),
	("Rose")
	("Espumante");

CREATE TABLE produtos(
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
nome VARCHAR(45) NOT NULL,
valor FLOAT NOT NULL,
imagem VARCHAR(150) NOT NULL,
safra VARCHAR(4) NOT NULL,
fornecedor_id INT UNSIGNED NOT NULL,
categorias_id INT UNSIGNED NOT NULL,
FOREIGN KEY(fornecedor_id) REFERENCES fornecedores(id),
FOREIGN KEY(categoria_id) REFERENCES categorias(id)
);



CREATE TABLE carrinhos(
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
clientes_id INT UNSIGNED NOT NULL,
FOREIGN KEY(clientes_id) REFERENCES clientes(id)
);


CREATE TABLE compras(
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
clientes_id INT UNSIGNED NOT NULL,
FOREIGN KEY(clientes_id) REFERENCES clientes(id)
);


INSERT INTO fornecedores( nome, email, senha)
VALUES
	('Vínicula Rio do Sol', 'rioSol@gmail.com', 999999),
	('Vínicula Terra Nova', 'terraNova@gmail.com', 333333),
    ('Vínicula Alves', 'viniculaAlves@gmail.com', 985484);
    
INSERT INTO categorias(nome)
VALUES
	('Vinho Tinto'),
	('Vinho Seco'),
    ('Vinho Rose'),
    ('Espumante');

INSERT INTO produtos(nome,valor,categoria_id,imagem,fornecedor_id,safra)
VALUES
('Barone Montalto',88.00,1,'1-barone-montalto',1,2021),
('Matetic Corralillo',75.50,1,'2-corralillo',1,2016),
('Vistamar Brisa',85.80,2,'3-vistamar-brisa',1,2020),
('Rio Flor Douro',80.50,2,'4-rio-flor',1,2018),
('Estandon Heritage',92.80,3,'5-estandon',2,2016),
('Tramari',95.50,3,'6-tramari',1,2015),
('Victoria Geisse',75.00,4,'7-victoria-geisse',2,2021),
('Gramona Cuvee',75.80,4,'8-gramona-cuvee',1,2020),
('Patrick Clerget',80.50,1,'9-patrick-clerget',1,2012),
('Barone Montalto',95.80,1,'10-barone-montalto',1,2017),
('Vallado Douro',82.50,2,'11-valladodouro',1,2022),
('Leyda Chardonnay',78.00,2,'12-leyda-reserva',1,2013),
('Henri LeBlanc',77.00,4,'13-henri-leblanc',1,2020),
('Gramona Imperial',93.50,4,'14-gramona-imperial',1,2015),
('Stardust',82.50,3,'15-stardust',1,2018),
('Lumière',88.00,3,'16-lumière',1,2020);

INSERT INTO clientes(nome, email, senha, cpf, data_nascimento)
VALUES
('Keyla', 'keyla@gmail.com', 13456, '10236589578', '2002-12-10'),
('Rodrigo', 'rodrigo@gmail.com', 003456, '145265891', '1998-05-28'),
('Matheus', 'matheus@gmail.com', 48456, '15489545698', '1994-02-20');

INSERT INTO pedidos(data_criacao,valor_unitario,quantidade,cliente_id,produto_id)
VALUES ('2023-02-06',88.00,1,1,8);

SELECT * FROM produtos AS Produto;

