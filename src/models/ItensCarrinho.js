const criarItensCarrinhoModel = (sequelize, dataTypes) => {
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

        imagem: {
            type:dataTypes.STRING,
            allowNull: false
        },

        quantidade: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        valor_unitario: {
            type: dataTypes.FLOAT,
            allowNull: false,
        },

        valor_total: {
            type: dataTypes.FLOAT,
            allowNull: false,
        },

        produto_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            
        },

        cliente_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
        }
    };

    const opcoes = {
        tableName: 'itensCarrinho',
        timestamps: false
    };


    const ItensCarrinho = sequelize.define('ItensCarrinho', colunas, opcoes);

    ItensCarrinho.associate = (models) => {
        // ItensCarrinho.hasMany(models.Produto, {
        //     as: "produtos",
        //     foreignKey: "produto_id"
        // });

        // ItensCarrinho.hasMany(Cliente, {
        //     as: "clientes",
        //     foreignKey: "cliente_id"
        // });
    };

    return ItensCarrinho;
};


module.exports = criarItensCarrinhoModel;
