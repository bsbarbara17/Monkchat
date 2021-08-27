const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_ponto_extra_tarde', {
    id_ponto_extra: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nm_turma: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nm_aluno: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nr_chamada: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_ponto_extra_tarde',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_ponto_extra" },
        ]
      },
    ]
  });
};
