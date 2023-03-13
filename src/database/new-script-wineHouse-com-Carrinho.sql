CREATE DATABASE wine_house;

USE wine_house;

-- criando as tabelas
CREATE TABLE clientes(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(90) NOT NULL,
email VARCHAR(45) NOT NULL UNIQUE,
senha VARCHAR(10) NOT NULL
);

CREATE TABLE fornecedores(
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
nome VARCHAR(45) NOT NULL,
email VARCHAR(45) NOT NULL UNIQUE,
senha VARCHAR(10) NOT NULL
);

CREATE TABLE produtos(
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
nome VARCHAR(45) NOT NULL,
valor FLOAT NOT NULL,
categoria VARCHAR(150) NOT NULL,
imagem VARCHAR(150) NOT NULL,
safra VARCHAR(4) NOT NULL,
fornecedores_id INT UNSIGNED NOT NULL,
FOREIGN KEY(fornecedores_id) REFERENCES fornecedores(id)
);


CREATE TABLE itenscarrinhos(
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
nome VARCHAR(45) NOT NULL,
imagem VARCHAR(150) NOT NULL,
valor_unitario FLOAT NOT NULL,
quantidade INT NOT NULL,
valor_total FLOAT NOT NULL,
clientes_id INT UNSIGNED NOT NULL,
produtos_id INT UNSIGNED NOT NULL,
FOREIGN KEY (produtos_id) REFERENCES produtos(id),
FOREIGN KEY(clientes_id) REFERENCES clientes(id)
);

CREATE TABLE pedidos(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
data_criacao DATE NOT NULL,
valor_total FLOAT NOT NULL,
quantidade INT NOT NULL,
clientes_id INT UNSIGNED NOT NULL,
itenscarrinhos_id INT UNSIGNED NOT NULL,
FOREIGN KEY (clientes_id) REFERENCES clientes(id),
FOREIGN KEY (itenscarrinhos_id) REFERENCES itenscarrinhos(id)
);

-- populando as tabelas
INSERT INTO clientes(nome, email, senha)
VALUES
('Keyla', 'keyla@gmail.com', 13456),
('Rodrigo', 'rodrigo@gmail.com', 003456),
('Matheus', 'matheus@gmail.com', 48456),
('Catia', 'catia@gmail.com', 124456),
('Sandra', 'sandra@gmail.com', 003456),
('Keyla', 'keyla_santos@gmail.com', 4803456),
('Pedro', 'pedro@gmail.com', 123486),
('Rodrigo', 'rodrigo_cardoso@gmail.com', 0034446),
('Matheus', 'matheus_oliveira@gmail.com', 4584034);

INSERT INTO fornecedores(nome, email, senha)
VALUES
	('Vínicula Rio do Sol', 'rioSol@gmail.com', 999999),
	('Vínicula Terra Nova', 'terraNova@gmail.com', 333333),
    ('Vínicula Alves', 'viniculaAlves@gmail.com', 985484);

INSERT INTO produtos(nome,valor,categoria,imagem,fornecedores_id,safra)
VALUES
('Barone Montalto',88.00,'Vinho Tinto','1-barone-montalto',1,2021),
('Matetic Corralillo',75.50,'Vinho Tinto','2-corralillo',1,2016),
('Vistamar Brisa',85.80,'Vinho Seco','3-vistamar-brisa',1,2020),
('Rio Flor Douro',80.50,'Vinho Seco','4-rio-flor',1,2018),
('Estandon Heritage',92.80,'Vinho Rose','5-estandon',2,2016),
('Tramari',95.50,'Vinho Rose','6-tramari',1,2015),
('Victoria Geisse',75.00,'Espumante','7-victoria-geisse',2,2021),
('Gramona Cuvee',75.80,'Espumante','8-gramona-cuvee',1,2020),
('Patrick Clerget',80.50,'Vinho Tinto','9-patrick-clerget',1,2012),
('Barone Montalto',95.80,'Vinho Tinto','10-barone-montalto',1,2017),
('Vallado Douro',82.50,'Vinho Seco','11-valladodouro',1,2022),
('Leyda Chardonnay',78.00,'Vinho Seco','12-leyda-reserva',1,2013),
('Henri LeBlanc',77.00,'Espumante','13-henri-leblanc',1,2020),
('Gramona Imperial',93.50,'Espumante','14-gramona-imperial',1,2015),
('Stardust',82.50,'Vinho Rose','15-stardust',1,2018),
('Lumière',88.00,'Vinho Rose','16-lumière',1,2020);

-- bucas nas tabelas
SELECT * FROM produtos AS Produto;

