'use strict';
const fs = require("fs")

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = JSON.parse(fs.readFileSync("./data.json", "utf-8"))
    data = data.map(e => {
      e.createdAt = new Date()
      e.updatedAt = new Date()
      return e
    })
    return queryInterface.bulkInsert("ProductionHouses", data, {})
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete("ProductionHouses", null, {})
  }
};
