const criarClienteModel = (sequelize, dataTypes) => {
    const colunas = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        nome: {
            type: dataTypes.STRING,
            allowNull: false
        },

        email: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true
        },

        senha: {
            type: dataTypes.STRING,
            allowNull: false
        },

        dataDeNascimento: {
            type: dataTypes.DATE,
            allowNull: false
        }
};

    const opcoes = {
        tableName: 'clientes',
        timestamps: false
    };

    const Cliente = sequelize.define('Cliente', colunas, opcoes)
    
    return Cliente;
};

module.exports = criarClienteModel;