const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('course_review', {
    core_prog_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'courses',
        key: 'corse_prog_id'
      }
    },
    core_entity_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'user_entity_id'
      }
    },
    core_review: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    core_rating: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    core_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'course_review',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "course_review_pkey",
        unique: true,
        fields: [
          { name: "core_prog_id" },
          { name: "core_entity_id" },
        ]
      },
    ]
  });
};
