// CommonJS
// const dataMapper = require('./datamapper');
import { dataMapper } from './dataMapper.js';

const Query = {
  getAllPersons() {
    return dataMapper.findAll();
  },
  getPersonByName(parent, args, context, info) {
    const column = Object.keys(args)[0];
    
    return dataMapper.findByName(args.firstname, column);
  },
  getPersonByDate(_, { date }) {
    return dataMapper.findByDate(date);
  }
};

const Mutation = {
  createPerson(_, args) {
    return dataMapper.insertPerson(args);
  },

  deleteByDate(_, args) {
    return dataMapper.deleteByDate(args.birthdate);
  },

  updateByName(_, {oldName, newName}) {
    return dataMapper.updateByName(oldName, newName);
  }
};

export { Query, Mutation };
