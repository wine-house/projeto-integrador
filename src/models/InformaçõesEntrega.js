const criarInformacoesEntregaModel = (sequelize, dataTypes) => {
    const colunas = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        cep: {
            type: dataTypes.STRING,
            allowNull: false
        },

        endereco: {
            type: dataTypes.STRING,
            allowNull: false,
        },

        numero: {
            type:dataTypes.STRING,
            allowNull: false
        },

        complemento: {
            type:dataTypes.STRING,
            allowNull: true
        },

        telefone: {
            type:dataTypes.STRING,
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
        tableName: 'informacoesEntregas',
        timestamps: false
    };

    const InformacoesEntrega = sequelize.define('InformacoesEntrega', colunas, opcoes)
    
    return InformacoesEntrega;
};

module.exports = criarInformacoesEntregaModel;