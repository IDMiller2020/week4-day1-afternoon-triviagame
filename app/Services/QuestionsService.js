import { ProxyState } from "../AppState.js";
import Question from "../Models/Question.js";
import { api } from "./AxiosService.js";

class QuestionsService {
  async getAllQuestions(url = "api.php?amount=10&difficulty=easy&type=multiple") {
    let response = await api.get(url)
    //AXIOS will always put the response in the data property.
    console.log(response.data.results)
    let questions = response.data.results.map(q => new Question(q))
    console.log(questions);
    ProxyState.questions = questions
    console.log('ProxyState.questions at end of QuestionsService getAllQuestions:');
    console.log(ProxyState.questions);
  }


}

export const questionsService = new QuestionsService();

