function getUserProfile(connection, userId) {
  return new Promise((resolve, reject) => {
    const query = `SELECT id, name, username, img_url, email FROM users
                    WHERE id=?`;

    connection.query(query, [userId], (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

module.exports = getUserProfile;
