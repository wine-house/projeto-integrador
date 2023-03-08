const criarCarrinhoModel = (sequelize, dataTypes) => {
    const colunas = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        produto_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'produto', //nome da tabela que será referenciada pela chave estrangeira
                key: 'id' //nome da coluna que será referenciada pela chave estrangeira
            }
        }
    };

    const opcoes = {
        tableName: 'carrinhos',
        timestamps: false
    };


    const Carrinho = sequelize.define('Carrinho', colunas, opcoes)
    
    return Carrinho;
};


module.exports = criarCarrinhoModel;