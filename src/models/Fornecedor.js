const criarFornecedorModel = (sequelize, dataTypes) => {
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
        }
    };

    const opcoes = {
        tableName: 'fornecedores',
        timestamps: false
    };

    const Fornecedor = sequelize.define('Fornecedor', colunas, opcoes);

    Fornecedor.associate = (models) => {
        Fornecedor.hasMany(models.Produto, {
            as: "produtos",
            foreignKey: "fornecedores_id"
        })
    };
    
    return Fornecedor;
};

module.exports = criarFornecedorModel;
