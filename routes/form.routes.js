const db = require("../models");
const Form = db.Form;
const Question = db.Question;
const SelectOption = db.SelectOption;
const Response = db.Response;
const Answer = db.Answer;

const controller = require("../contorllers/controller")

module.exports = function(app) {
  app.get("/", async (req, res) => {
    res.json({ message: "Welcome to our application."});
  });
  
  app.get("/forms", async (req, res) => {
    const forms = await Form.findAll({ order: [["createdAt", "DESC"]] });
    res.json({ forms: forms });
  });
  
  app.get("/form/:uuid", async (req, res) => {
    const uuid = req.params.uuid;
    const form = await Form.findOne({
      include: Question,
      // include: SelectOption,
      where: { uuid: uuid },
    });
    res.json({ form: form });
  });
  
  app.get("/form/options/:uuid", async (req, res) => {
    const formUuid = req.params.uuid;
    const options = await SelectOption.findAll({
      where: { formUuid: formUuid },
    });
    res.json({ options: options });
  });
  
  app.get("/question/:uuid", async (req, res) => {
    const uuid = req.params.uuid;
    const question = await Question.findOne({
      include: SelectOption,
      where: { uuid: uuid },
    });
    res.json({ question: question });
  });
  
  app.get("/question/options/:qUuid", async (req, res) => {
    const qUuid = req.params.qUuid;
    const options = await SelectOption.findAll({
      where: { qUuid: qUuid },
    });
    res.json({ options: options });
  });
  
  app.get(
    "/questions/:formUuid",
    async (req, res) => {
      const formUuid = req.params.formUuid;
      const questions = await Question.findAll({
        where: { formUuid: formUuid },
      });
      res.json({ questions: questions });
    }
  );
  
  app.get("/answers", async (req, res) => {
    const answers = await Answer.findAll({ order: [["createdAt", "DESC"]] });
    res.json({ answers: answers });
  })

  app.get("/answers/:qUuid", async (req, res) => {
    const qUuid = req.params.qUuid;
    const answers = await Answer.findAll({
      where: {qUuid: qUuid}
    })
    res.json({anwers: answers})
  })

  app.get("/answers/form/:uuid", async (req, res) => {
    const answers = await Answer.findAll({where: {formUuid: req.params.uuid} })
    res.json({answers:answers})
  })
  
  app.get("/questions", async (req, res) => {
    const questions = await Question.findAll({order: [["createdAt", "DESC"]]})
    res.json({questions: questions})
  })
  
  app.get("/form/questions", async (req, res) => {
    const form = await Form.findOne({
      where: { uuid: req.body.formUuid },
    });
    const questions = await form.getQuestions();
    res.json({ form: form, questions: questions });
  });
  app.get("/form/questions/:uuid", async (req, res) => {
    const uuid = req.params.uuid
    const form = await Form.findOne({
      where: { uuid: uuid },
    });
    const questions = await form.getQuestions();
    res.json({ form: form, questions: questions });
  });
  
  app.get("/response/answers/:uuid", async (req, res) => {
    const uuid = req.params.uuid;
    const response = await Response.findOne({
      where: { uuid: uuid },
    });
    const answers = await response.getAnswers();
    res.json({ response: response, answers: answers });
  });
  
  app.get("/question/options/:uuid", async (req, res) => {
    const uuid = req.params.uuid
    const question = await Question.findOne({
      where: { uuid: uuid},
    });
    const options = await question.getSelectOptions();
    res.json({ question: question, options: options });
  });
  
  app.post("/createform", async (req, res) => {
    try {
      const { uuid } = req.body;
      const formResult = await Form.findOne({ where: { uuid: uuid } });
      if (formResult) {
        return;
      } else {
        const createdForm = await Form.create({
          formTitle: req.body.formTitle,
          formDesc: req.body.formDesc,
          uuid: uuid,
        });
        res.json({ createdForm: createdForm });
      }
    } catch (e) {
      console.log(e);
    }
  });
  app.post("/createquestions", async (req, res) => {
    try {
      const form = await Form.findOne({ where: { uuid: req.body.formUuid } });
      const questions = req.body.questions.map((question, index) => {
        return {
          formId: form.id,
          formUuid: form.uuid,
          qType: question.qType,
          title: question.title,
          desc: question.desc,
          uuid: question.uuid,
        };
      });
      const createdQuestions = await Question.bulkCreate(questions);
      res.json({ createdQuestions: createdQuestions });
    } catch (e) {
      console.log(e);
    }
  });
  
  app.post("/createoptions", async (req, res) => {
    try {
      const question = await Question.findOne({
        where: { uuid: req.body.qUuid },
      });
      const form = await Form.findOne({ where: { uuid: req.body.formUuid } });
      const options = req.body.options.map((option, index) => {
        return {
          questionId: question.id,
          qUuid: req.body.qUuid,
          qQType: question.qType,
          qTitle: question.title,
          qDesc: question.desc,
          title: option.title,
          desc: option.desc,
          uuid: option.uuid,
          formUuid: req.body.formUuid,
          formId: form.id,
        };
      });
      const createdOptions = await SelectOption.bulkCreate(options);
      res.json({ createdOptions: createdOptions });
    } catch (e) {
      console.log(e);
    }
  });
  
  app.post("/createresponse", async (req, res) => {
    try {
      const { uuid } = req.body;
      const responseResult = await Response.findOne({ where: { uuid: uuid } });
      if (responseResult) {
        return;
      } else {
        const form = await Form.findOne({ where: { uuid: req.body.formUuid } });
        const formId = form.id;
        const createdResponse = await Response.create({
          formTitle: req.body.formTitle,
          formDesc: req.body.formDesc,
          formUuid: req.body.formUuid,
          uuid: uuid,
          formId: formId,
        });
        res.json({ createdResponse: createdResponse });
      }
    } catch (e) {
      console.log(e);
    }
  });
  
  app.post("/createanswer", async (req, res) => {
    try {
      const question = await Question.findOne({
        where: { uuid: req.body.qUuid },
      });
      const response = await Response.findOne({
        where: {uuid: req.body.responseUuid}
      })
      const form = await Form.findOne({ where: { uuid: req.body.formUuid } });
      const createdAnswer = await Answer.create({
        responseUuid: req.body.responseUuid,
        questionId: question.id,
        qUuid: req.body.qUuid,
        qQType: question.qType,
        title: req.body.title,
        desc: req.body.desc,
        uuid: req.body.uuid,
        formUuid: req.body.formUuid,
        formId: form.id,
        ResponseId: response.id,
        checked: req.body.checked,
        qTitle: question.title,
        qDesc: question.desc
      });
      res.json({ createdAnswer: createdAnswer });
    } catch (e) {
      console.log(e);
    }
  });
  
  app.get("/responses", async (req, res) => {
    try {
      const responses = await Response.findAll({
        order: [["createdAt", "DESC"]],
      });
      res.json({ responses: responses });
    } catch (e) {
      console.log(e);
    }
  });
  
  app.get("/responses/:uuid", async(req, res) => {
    try{
      const uuid = req.params.uuid;
      const responses = await Response.findAll({
        where: {formUuid: uuid}
      });
      res.json({responses: responses})
    } catch (e) {
      console.log(e)
    }
  })
  
  app.get("/oneresponse/:uuid", async(req, res) => {
    try {
      const uuid = req.params.uuid;
      const response = await Response.findOne({where: {uuid: uuid}})
  res.json({response:response})
    } catch (e) {
      
      console.log(e)
    }
  })
  
}