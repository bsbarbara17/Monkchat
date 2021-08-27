const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_chat', {
    id_chat: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_sala: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tb_sala',
        key: 'id_sala'
      }
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tb_usuario',
        key: 'id_usuario'
      }
    },
    ds_mensagem: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    dt_mensagem: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_chat',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_chat" },
        ]
      },
      {
        name: "id_sala",
        using: "BTREE",
        fields: [
          { name: "id_sala" },
        ]
      },
      {
        name: "id_usuario",
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
    ]
  });
};
