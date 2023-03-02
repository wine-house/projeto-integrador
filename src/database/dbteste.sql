-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Wine_House
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Wine_House
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Wine_House` DEFAULT CHARACTER SET utf8 ;
USE `Wine_House` ;

-- -----------------------------------------------------
-- Table `Wine_House`.`clientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Wine_House`.`clientes` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(90) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `senha` VARCHAR(6) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Wine_House`.`fornecedores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Wine_House`.`fornecedores` (
  `id` INT NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `senha` VARCHAR(6) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Wine_House`.`produtos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Wine_House`.`produto` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `valor` INT NOT NULL,
  `tipo` VARCHAR(150) NOT NULL,
  `imagem` VARCHAR(150) NOT NULL,
  `fornecedores_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`, `fornecedores_id`),
  INDEX `fk_produtos_fornecedores_idx` (`fornecedores_id` ASC) VISIBLE,
  CONSTRAINT `fk_produtos_fornecedores`
    FOREIGN KEY (`fornecedores_id`)
    REFERENCES `Wine_House`.`fornecedores` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Wine_House`.`carrinhos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Wine_House`.`carrinhos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `clientes_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Carrinho_clientes1_idx` (`clientes_id` ASC) VISIBLE,
  CONSTRAINT `fk_Carrinho_clientes1`
    FOREIGN KEY (`clientes_id`)
    REFERENCES `Wine_House`.`clientes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Wine_House`.`compras`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Wine_House`.`compras` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `clientes_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Compras_clientes1_idx` (`clientes_id` ASC) VISIBLE,
  CONSTRAINT `fk_Compras_clientes1`
    FOREIGN KEY (`clientes_id`)
    REFERENCES `Wine_House`.`clientes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Wine_House`.`pedidos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Wine_House`.`pedidos` (
  `Compra_id` INT NOT NULL,
  `produtos_id` INT UNSIGNED NOT NULL,
  `produtos_fornecedores_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`Compra_id`, `produtos_id`, `produtos_fornecedores_id`),
  INDEX `fk_Compra_has_produtos_produtos1_idx` (`produtos_id` ASC, `produtos_fornecedores_id` ASC) VISIBLE,
  INDEX `fk_Compra_has_produtos_Compra1_idx` (`Compra_id` ASC) VISIBLE,
  CONSTRAINT `fk_Compra_has_produtos_Compra1`
    FOREIGN KEY (`Compra_id`)
    REFERENCES `Wine_House`.`compras` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Compra_has_produtos_produtos1`
    FOREIGN KEY (`produtos_id` , `produtos_fornecedores_id`)
    REFERENCES `Wine_House`.`produtos` (`id` , `fornecedores_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Wine_House`.`produtosCarrinho`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Wine_House`.`produtosCarrinho` (
  `carrinhos_id` INT NOT NULL,
  `produtos_id` INT UNSIGNED NOT NULL,
  `quantidade` INT NOT NULL,
  PRIMARY KEY (`carrinhos_id`, `produtos_id`),
  INDEX `fk_carrinhos_has_produtos_produtos1_idx` (`produtos_id` ASC) VISIBLE,
  INDEX `fk_carrinhos_has_produtos_carrinhos1_idx` (`carrinhos_id` ASC) VISIBLE,
  CONSTRAINT `fk_carrinhos_has_produtos_carrinhos1`
    FOREIGN KEY (`carrinhos_id`)
    REFERENCES `Wine_House`.`carrinhos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_carrinhos_has_produtos_produtos1`
    FOREIGN KEY (`produtos_id`)
    REFERENCES `Wine_House`.`produtos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
