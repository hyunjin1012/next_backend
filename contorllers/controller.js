const db = require("../models");
const Form = db.Form;
const Question = db.Question;
const SelectOption = db.SelectOption;
const Response = db.Response;
const Answer = db.Answer;

exports.delete = async (req, res) => {
  const formId = parseInt(req.params.id);
  const deleteEntry = await Form.destroy({
    where: {id: formId}
  })
  if (!deleteEntry) {
    return res.status(404).send("not found")
  }
  return res.json({message: "success"})
}

exports.create = async (req, res) => {
  const formId = req.params.id
  const form = await Form.findOne({
    include: Question,
    where: {id: formId}
  })
  console.log(form);
  res.json({result: form})
}