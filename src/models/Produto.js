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

        tipo: {
            type: dataTypes.STRING,
            allowNull: false
        },
    };

    const opcoes = {
        tableName: 'produtos',
        timestamps: false
    };


    const Produto = sequelize.define('Produto', colunas, opcoes)
    
    return Produto;
};


module.exports = criarProdutoModel;