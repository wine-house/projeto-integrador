const criarFormaPagamentoModel = (sequelize, dataTypes) => {
    const colunas = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        metodo_pagamento: {
            type:dataTypes.STRING,
            allowNull: false
        }
    };

    const opcoes = {
        tableName: 'formasPagamentos',
        timestamps: false
    };

    const FormaPagamento = sequelize.define('FormaPagamento', colunas, opcoes)
    
    return FormaPagamento;
};

module.exports = criarFormaPagamentoModel;