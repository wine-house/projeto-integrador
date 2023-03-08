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
            references: {
                model: 'produtos', //nome da tabela que será referenciada pela chave estrangeira
                key: 'id' //nome da coluna que será referenciada pela chave estrangeira
            }
        }
    };

    const opcoes = {
        tableName: 'Itenscarrinhos',
        timestamps: false
    };


    const ItensCarrinho = sequelize.define('ItensCarrinho', colunas, opcoes)
    
    return ItensCarrinho;
};


module.exports = criarItensCarrinhoModel;