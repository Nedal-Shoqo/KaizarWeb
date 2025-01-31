module.exports = (sequelize, DataTypes) => {
const User = sequelize.define('User', {

    id:{
     type : DataTypes.INTEGER,
     primaryKey:true,
     auroIncrement:true,
    },
    // Define model attributes
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    // Model options (e.g., timestamps)
    timestamps: true,
  });

  return User;
}