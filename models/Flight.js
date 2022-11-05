const { v4: uuidv4 } = require('uuid');

exports.models = [
  {
    title: 'flight to Canada',
    time: '1PM',
    price: 26000,
    date: '26-06-2022',
    id: uuidv4(),
  },
];
