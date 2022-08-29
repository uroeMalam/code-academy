const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bank', {
    bank_entity_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'entity',
        key: 'entity_id'
      }
    },
    bank_code: {
      type: DataTypes.STRING(10),
      allowNull: true,
      unique: "bank_bank_code_key"
    },
    bank_name: {
      type: DataTypes.STRING(55),
      allowNull: true,
      unique: "bank_bank_name_key"
    },
    bank_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'bank',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "bank_bank_code_key",
        unique: true,
        fields: [
          { name: "bank_code" },
        ]
      },
      {
        name: "bank_bank_name_key",
        unique: true,
        fields: [
          { name: "bank_name" },
        ]
      },
      {
        name: "bank_pkey",
        unique: true,
        fields: [
          { name: "bank_entity_id" },
        ]
      },
    ]
  });
};
