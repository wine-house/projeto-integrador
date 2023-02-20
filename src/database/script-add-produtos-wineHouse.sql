ALTER TABLE produtos ADD COLUMN safra INT;

INSERT INTO produtos(nome,valor,tipo,imagem,fornecedores_id,safra)
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

DELETE FROM produtos WHERE id=1;
SELECT * FROM produtos;