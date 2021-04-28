import React from 'react';

import { Route, Switch, Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { faFish } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PoemList from './component/PoemList';
import PoemDetail from './component/PoemDetail'




class App extends React.Component {
  componentDidMount() {
    this.props.onPoemListLoad();
  }
 
  render() {
    const {
      isLoading,
      isError,
      isSending,
      onPoemDelete,
      poemList
    } = this.props;
 
    if (isLoading) {
      return (
        <div className="loading-box">
          <div className="align-center">
            <FontAwesomeIcon
              icon={faFish}
              size="8x"
              spin
            />
          </div>
        </div>
      );
    }
 
    if (isError) {
      return (
        <div className="error-box">
          <div className="align-center">
            <FontAwesomeIcon
              icon={faFish}
              size="3x"
            />
            <p className="warning">SORRY.</p>
            <p>SOMETHING WENT WRONG</p>
            <button
              type="button"
              className="btn-back"
              onClick={() => {
                window.location.reload();
              }}
            >
              RETRY
            </button>
          </div>
        </div>
      );
    }
 
    return (
      <div className="app-container">
        <header className="memo-header">
          <h1 className="app-title">
            <Link to="/">
              WRITE ANYTHING.
            </Link>
          </h1>
        </header>
        <div className="memo-container">
          <Switch>
            <Redirect exact from="/" to="/poems" />
 
            <Route
              exact path="/poems"
              render={routerProps => (
                <PoemList
                  {...routerProps}
                  poemList={poemList}
                  isSending={isSending}
                  onPoemDelete={onPoemDelete}
                />
              )}
            />
 
            <Route
              exact path="/poems/:poemId"
              render={routerProps => {
                // const poemId = routerProps.match.params.poemId;
                // const targetPoem = poemList.find(poem => poem.id === poemId);
 
                return (
                  <PoemDetail
                    {...routerProps}
                  />
                )
              }}
            />
          </Switch>
        </div>
      </div>
    );
  }
}
 
export default App;


