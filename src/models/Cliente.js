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

        imageProfile: {
            type: dataTypes.STRING
        },

        email: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true
        },

        cpf:{
            type: dataTypes.STRING,
            allowNull: false,
            unique: true
        },
        data_nascimento:{
            type: dataTypes.DATEONLY,
            allowNull: false,
        },
        senha: {
            type: dataTypes.STRING,
            allowNull: false,
            defaultValue: '$2b$10$AYNs65Y2H9.kW3E8GmXsFOryRilovzQG2OsCMwFewPe.pnSUC87.i'
        },
        isAdmin: {
            type: dataTypes.TINYINT,
            allowNull: false,
            defaultValue: 0
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