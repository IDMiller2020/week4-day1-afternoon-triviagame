import { ProxyState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsService.js";


//Private
function _draw() {
  let questions = ProxyState.questions;
  let template = ''
  questions.forEach(q => template += q.Template)
  document.getElementById("app").innerHTML = `
  
  <div className="card-columns questions">
      ${template}
  </div>
  `
}

//Public
export default class QuestionsController {
  constructor() {
    console.log('QuestionsController.js constructor')
    ProxyState.on("questions", _draw);
    questionsService.getAllQuestions()
//    questionsService.buildAnswers()
  }

  // getAll(url) {
  //   console.log('QuestionsController.js getAll')
  //   questionsService.getAllQuestions(url)
  // }
  
  // answers() {
  //   console.log('QuestionsController.js answers')
  //   questionsService.buildAnswers()
  // }
}
