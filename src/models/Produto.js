const criarProdutoModel = (sequelize, dataTypes) => {
    const colunas = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        nome: {
            type: dataTypes.STRING,
            allowNull: false
        },

        valor: {
            type: dataTypes.FLOAT,
            allowNull: false
        },

        imagem: {
            type:dataTypes.STRING,
            allowNull: false
        },

        fornecedores_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        categoria: {
            type: dataTypes.STRING,
            allowNull: false
        },

        safra: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };

    const opcoes = {
        tableName: 'produtos',
        timestamps: false
    };


    const Produto = sequelize.define('Produto', colunas, opcoes)
    
    return Produto;
};


module.exports = criarProdutoModel;