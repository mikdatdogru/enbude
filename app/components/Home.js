import React, { Component, Fragment } from 'react';
import HomeContainer from '../containers/HomeContainer';
import ImgItem from './ImgItem';
import TextItem from './TextItem';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <HomeContainer>
        {({ clipboard, myRef, listenItem }) => {
          return (
            <div className="container" ref={myRef}>
              {clipboard
                .sort((a, b) => {
                  return new Date(b.createdAt) - new Date(a.createdAt);
                })
                .map((item, i) => {
                  return (
                    <div
                      key={i}
                      tabIndex={i}
                      onKeyPress={e => listenItem(e, item)}
                      onDoubleClick={() => listenItem('click', item)}
                      className="clipItem"
                    >
                      {item.type === 'img' && <ImgItem img={item.data} />}
                      {item.type === 'text' && <TextItem text={item.data} />}
                    </div>
                  );
                })}
            </div>
          );
        }}
      </HomeContainer>
    );
  }
}

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
