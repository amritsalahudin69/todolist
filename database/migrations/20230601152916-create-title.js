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
    await queryInterface.createTable('sys_title', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull : true,
        references : {
          model : "sys_users",
          key : "id",
          as : "user_id"
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
    await queryInterface.dropTable('sys_title');
  }
};
