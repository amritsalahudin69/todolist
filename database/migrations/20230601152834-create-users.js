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
    await queryInterface.createTable('sys_users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      code: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('sys_users');
  }
};
