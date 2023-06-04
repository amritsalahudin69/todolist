'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('sys_activities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nameActivities: {
        type: Sequelize.STRING
      },
      title_id: {
        type: Sequelize.INTEGER,
        allowNull : true,
        references : {
          model : "sys_title",
          key : "id",
          as : "title_id"
        }
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Date.now()
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Date.now()
      },
      deleted_at: {
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('sys_activities');
  }
};
