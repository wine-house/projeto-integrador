// const Produto = require('./index');

const criarPedidoModel = (sequelize, dataTypes) => {
    const colunas = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        data_criacao: {
            type: dataTypes.DATE,
            allowNull: false
        },

        valor_total: {
            type: dataTypes.FLOAT,
            allowNull: false,
        },

        clientes_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'clientes', //nome da tabela que será referenciada pela chave estrangeira
                key: 'id' //nome da coluna que será referenciada pela chave estrangeira
            }
        }
};

    const opcoes = {
        tableName: 'pedidos',
        timestamps: false
    };

    // Define Pedido model
    const Pedido = sequelize.define('Pedido', colunas, opcoes);

    // Define association between Pedido and Produto models
    Pedido.associate = function(models) {
        Pedido.belongsToMany(models.Produto, {
            through: 'pedidos_produtos',
            foreignKey: 'pedido_id',
            otherKey: 'produto_id',
            as: 'produtos',
            onDelete: 'CASCADE'
        });
    }
    
    return Pedido;
};

module.exports = criarPedidoModel;
