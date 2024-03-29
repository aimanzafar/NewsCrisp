import React, {  useState } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

const App =()=> {
  const pageSize = 5;
 const apiKey= process.env.REACT_APP_NEWS_API
const[progress, setProgress] = useState(0);
//   state= {
// progress: 0
//   }


    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar color="#f11946" progress={progress}   style={{ height: '2px' }} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News setProgress={setProgress} apiKey={apiKey}
                  key="general"
                  pageSize={pageSize}
                  country="in"
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/Business"
              element={
                <News setProgress={ setProgress} apiKey={ apiKey}
                  key="business"
                  pageSize={ pageSize}
                  country="in"
                  category="business"
                />
              }
            ></Route>
            <Route
              exact
              path="/Entertainment"
              element={
                <News setProgress={ setProgress} apiKey={ apiKey}
                  key="entertainment"
                  pageSize={ pageSize}
                  country="in"
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              exact
              path="/General"
              element={
                <News setProgress={ setProgress} apiKey={ apiKey}
                  key="general"
                  pageSize={ pageSize}
                  country="in"
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/Health"
              element={
                <News setProgress={ setProgress} apiKey={ apiKey}
                  key="health"
                  pageSize={ pageSize}
                  country="in"
                  category="health"
                />
              }
            ></Route>
            <Route
              exact
              path="/Science"
              element={
                <News setProgress={ setProgress} apiKey={ apiKey}
                  key="science"
                  pageSize={ pageSize}
                  country="in"
                  category="science"
                />
              }
            ></Route>
            <Route
              exact
              path="/Sports"
              element={
                <News setProgress={ setProgress} apiKey={ apiKey}
                  key="sports"
                  pageSize={ pageSize}
                  country="in"
                  category="sports"
                />
              }
            ></Route>
            <Route
              exact
              path="/Technology"
              element={
                <News setProgress={ setProgress} apiKey={ apiKey}
                  key="technology"
                  pageSize={ pageSize}
                  country="in"
                  category="technology"
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );

}
export default App;
