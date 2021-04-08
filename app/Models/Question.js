export default class Question {
    constructor({category, question, correct_answer, incorrect_answers}) {
        this.category = category
        this.question = question
        this.correctAnswer = correct_answer
        this.incorrectAnswers = incorrect_answers
    }

    get Template() {
        return `
        <!-- Radio buttons below can be disabled or checked by adding checked or disabled to the end of the input tag -->
        <div class="card p-2 value">
            <h3><b>Category:</b> <em>${this.category}</em></h3>
            <p><b>Question:</b> <em>${this.question}</em></p>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1">
              <label class="form-check-label" for="exampleRadios1">
                ${this.correctAnswer}
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
              <label class="form-check-label" for="exampleRadios2">
              ${this.incorrectAnswers}
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3">
              <label class="form-check-label" for="exampleRadios3">
              ${this.question.answers}
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3">
              <label class="form-check-label" for="exampleRadios3">
              Answer4
              </label>
            </div>
        </div>
        `
    }
}

// {
//     response_code: 0,
//     results: [
//     {
//     category: "Science & Nature",
//     type: "multiple",
//     difficulty: "easy",
//     question: "What does the letter &#039;S&#039; stand for in &#039;NASA&#039;?",
//     correct_answer: "Space",
//     incorrect_answers: [
//     "Science",
//     "Society",
//     "Star"
//     ]
