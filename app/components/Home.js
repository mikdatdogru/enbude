import React from 'react';
import HomeContainer from '../containers/HomeContainer';
import ImgItem from './ImgItem';
import TextItem from './TextItem';

const Home = () => {
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
                  <li
                    key={i}
                    tabIndex={i}
                    onKeyPress={e => listenItem(e, item)}
                    onDoubleClick={() => listenItem('click', item)}
                    className="clipItem"
                  >
                    <div>
                      {item.type === 'img' && <ImgItem img={item.data} />}
                      {item.type === 'text' && <TextItem text={item.data} />}
                    </div>
                  </li>
                );
              })}
          </div>
        );
      }}
    </HomeContainer>
  );
};

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
