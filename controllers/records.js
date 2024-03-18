
const RecordItem = require("../models/recordItem.js");

 const getRecords = async (req, res) => {
  try {
    const recordList = await RecordItem.find();

    res.status(200).json(recordList);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
  //res.status(200).json({ message: "getRecords" });
};

 const getRecord = async (req, res) => {
  const { id } = req.params;
  try {
    const recordItem = await RecordItem.findById(id);
    res.status(200).json(recordItem);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
  //res.status(200).json({ message: "getRecord" });
};

 const createRecord = async (req, res) => {
  
  try {
    const { name, email } = req.body;
    console.log(req.body)
    const persona = {
      name: name,
      email: email
    };

    res.status(200).json({ message: 'Registro creado exitosamente', data: persona });
  } catch (error) {
    res.status(404).json({ message: error.message });
    console.log("error create",error);
  }
  //res.status(200).json({ message: "createRecord" });
};

 const updateRecord = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  
  res.status(200).json({ message: "updateRecord" });
};

 const deleteRecord = async (req, res) => {
  const { id } = req.params;
  
  res.status(200).json({ message: "deleteRecord" });
};

module.exports = {
getRecords,
getRecord,
createRecord,
updateRecord,
deleteRecord
};
