import { Model, DataTypes } from 'sequelize';
import Sequelize from '../utils/postgresql.config.js';

// import { encryptedPassword } from '../utils/encryption.js';

class User extends Model {

  // static login(username, password) {
  //   return this.findOne({
  //     where: {
  //       username,
  //       password: encryptedPassword(password)
  //     },
  //   });
  // }
}

User.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
    unique: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
      isEmail: true,
      isLowercase: true
    },
    // set(value) {
    //   const encryptedPassword = encryptPassword(value);
    //   this.setDataValue('password', encryptedPassword);
    // }
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [9, 11],
    },
  },
  active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'user',
    validate: {
      isIn: [['user', 'admin']],
    }
  }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
});

export default User;