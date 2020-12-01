import React, { Component } from 'react';
import MyFlashCards from '../../components/Cards/MyFlashCards';
import flashCardData from '../../helpers/data/flashCardsData';

class MyCards extends Component {
  state = {
    flashCards: [],
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    flashCardData.getFlashCards().then((response) => {
      this.setState({
        flashCards: response,
      });
    });
  }

  render() {
    const { flashCards } = this.state;
    return (
      <div className='my-cards-container'>
        {flashCards.map((card) => <MyFlashCards key={card.firebaseKey} card={card}/>)}
      </div>
    );
  }
}

export default MyCards;
