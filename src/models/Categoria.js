const criarCategoriaModel = (sequelize, dataTypes) => {
    const colunas = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        nome: {
            type: dataTypes.STRING,
            allowNull: false
        }
};

    const opcoes = {
        tableName: 'categoria',
        timestamps: false
    };

    const Categoria = sequelize.define('Categoria', colunas, opcoes)
    
    return Categoria;
};

module.exports = criarCategoriaModel;