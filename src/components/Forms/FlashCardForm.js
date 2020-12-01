import React, { Component } from 'react';
import flashCardsData from '../../helpers/data/flashCardsData';

export default class FlashCardForm extends Component {
  state = {
    firebaseKey: '',
    question: '',
    answer: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.btn.setAttribute('disabled', 'disabled');
    flashCardsData.createFlashCard(this.state).then((resp) => {
      this.setState({ success: true, firebaseKey: resp.data.firebaseKey });
      console.warn('state', this.state);
    });
    setTimeout(() => {
      this.setState({ success: false });
    }, 3000);
  }

  render() {
    const { success } = this.state;
    return (
      <div>
        {success && (
          <div className="alert alert-success" role="alert">
            Your flash card was created
          </div>
        )}
        <form onSubmit={this.handleSubmit}>
        <div>
            <input
              type="text"
              name="question"
              value={this.state.question}
              onChange={this.handleChange}
              placeholder="Question"
              className="form-control form-control-lg m-1"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="answer"
              value={this.state.answer}
              onChange={this.handleChange}
              placeholder="Answer"
              className="form-control form-control-lg m-1"
              required
            />
          </div>
          <button
          ref={(btn) => {
            this.btn = btn;
          }}>Submit</button>
        </form>
      </div>
    );
  }
}
