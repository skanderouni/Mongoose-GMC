const Person = require('../models/Person');

// Add new Person
exports.addPerson = async (req, res) => {
  try {
    const findUser = await Person.findOne({ email: req.body.email });
    if (findUser) {
      return res.status(400).send({ msg: 'email should be unique' });
    }
    const newPerson = new Person({ ...req.body });
    await newPerson.save();
    res.send({ msg: 'add route', newPerson });
  } catch (error) {
    res.status(400).send({ msg: 'user not saved', error });
  }
};

// Get the entire list of People
exports.getAllPerson = async (req, res) => {
  try {
    const personslist = await Person.find();
    res.send({ personslist, msg: 'get all Person' });
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: 'can not get', error });
  }
};

// Get one Person by Id
exports.getPerson = async (req, res) => {
  try {
    const { _id } = req.params;
    const findPerson = await Person.findOne({ _id });
    res.send({ msg: 'get the Person', findPerson });
  } catch (error) {
    res.status(400).send({ msg: 'can not get the Person' });
  }
};

// Update one Person
exports.updatePerson = async (req, res) => {
  try {
    const { id } = req.params;
    await Person.updateOne({ _id: id }, { $set: { ...req.body } });
    res.send({ msg: 'updated succ' });
  } catch (error) {
    res.status(400).send({ msg: 'can not update' });
  }
};

// Delete one Person
exports.deletePerson = async (req, res) => {
  try {
    const { id } = req.params;
    let result = await Person.deleteOne({ _id: id });
    res.send({ msg: 'deleted succ' });
  } catch (error) {
    res.status(400).send({ msg: 'can not delete' });
  }
};

// Find people who like Couscous
exports.getSortPerson = async (req, res) => {
  try {
    const sortPerson = await Person.findOne({ ...(favoriteFoods = 'Couscous') })
      .sort('name')
      .select('name', 'email');
    res.send({ msg: 'get the Person', sortPerson });
  } catch (error) {
    res.status(400).send({ msg: 'can not get the Person', error });
  }
};
