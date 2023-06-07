const connection = require("../database");

class Destination {
  static getAll() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM destinations", (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }

  static getById(id) {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM destinations WHERE id = ?",
        [id],
        (error, results) => {
          if (error) {
            reject(error);
          } else {
            resolve(results[0]);
          }
        }
      );
    });
  }

  static getByCategory(category) {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM destinations WHERE category = ?",
        [category],
        (error, results) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        }
      );
    });
  }

  static create(name, description, category) {
    return new Promise((resolve, reject) => {
      connection.query(
        "INSERT INTO destinations (name, description, category) VALUES (?, ?, ?)",
        [name, description, category],
        (error, results) => {
          if (error) {
            reject(error);
          } else {
            const createdDestination = {
              id: results.insertId,
              name,
              description,
              category,
            };
            resolve(createdDestination);
          }
        }
      );
    });
  }

  static update(id, name, description, category) {
    return new Promise((resolve, reject) => {
      connection.query(
        "UPDATE destinations SET name = ?, description = ?, category = ? WHERE id = ?",
        [name, description, category, id],
        (error, results) => {
          if (error) {
            reject(error);
          } else if (results.affectedRows === 0) {
            resolve(null);
          } else {
            const updatedDestination = {
              id,
              name,
              description,
              category,
            };
            resolve(updatedDestination);
          }
        }
      );
    });
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      connection.query(
        "DELETE FROM destinations WHERE id = ?",
        [id],
        (error, results) => {
          if (error) {
            reject(error);
          } else if (results.affectedRows === 0) {
            resolve(null);
          } else {
            const deletedDestination = {
              id,
            };
            resolve(deletedDestination);
          }
        }
      );
    });
  }
}

module.exports = Destination;
