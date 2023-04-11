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

        metodo_pagamento: {
            type:dataTypes.STRING,
            allowNull: false
        },

        itens: {
            type: dataTypes.ARRAY(dataTypes.STRING),
            allowNull: true
        },

        cliente_id: {
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

    const Pedido = sequelize.define('Pedido', colunas, opcoes)
    
    return Pedido;
};

module.exports = criarPedidoModel;