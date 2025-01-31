module.exports = (sequelize, DataTypes) => {
const User = sequelize.define('User', {

    id:{
     type : DataTypes.INTEGER,
     primaryKey:true,
     autoIncrement:true,
    },
    // Define model attributes
    fullname: {
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
    },
     phoneNumber:{
      type : DataTypes.STRING,
      allowNull: false,
      unique: true,
     },
  }, {
    // Model options (e.g., timestamps)
    timestamps: true,
  });

  return User;
}