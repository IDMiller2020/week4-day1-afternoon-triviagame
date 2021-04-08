// Exports the "helper" axios who fires all the requests to the provided API
// @ts-ignore
export const api = axios.create({
  baseURL: 'https://opentdb.com',
  timeout: 10000
})

// https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple

// NOTE when baseURL is exported the / will always be added to the end so in this case I had to use 'api.php?amount=10&difficulty=easy&type=multiple' in QuestionsService.js for the async getAllQuestions(url = "api.php?amount=10&difficulty=easy&type=multiple") {...