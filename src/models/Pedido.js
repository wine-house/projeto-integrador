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

        quantidade: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
};

    const opcoes = {
        tableName: 'pedidos',
        timestamps: false
    };

    const Pedido = sequelize.define('Pedido', colunas, opcoes)
    
    return Pedido;
};

module.exports = criarPedidoModel;