const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('programs_review', {
    pore_prog_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'program_entity',
        key: 'prog_id'
      }
    },
    pore_entity_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'user_entity_id'
      }
    },
    bore_review: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    bore_rating: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    bore_modified_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'programs_review',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "programs_review_pkey",
        unique: true,
        fields: [
          { name: "pore_prog_id" },
          { name: "pore_entity_id" },
        ]
      },
    ]
  });
};
