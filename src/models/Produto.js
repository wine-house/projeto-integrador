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

        safra: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        fornecedor_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        categorias_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

    };

    const opcoes = {
        tableName: 'produtos',
        timestamps: false
    };


    const Produto = sequelize.define('Produto', colunas, opcoes);

    Produto.associate = models => {
        
        Produto.belongsTo(models.Fornecedor, {
            as: "fornecedor",
            foreignKey: "fornecedor_id"
        });
        
        Produto.belongsTo(models.Categoria, {
            as: "categoria",
            foreignKey: "categorias_id"
        });
    };

  
    return Produto;
};


module.exports = criarProdutoModel;