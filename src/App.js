import { BrowserRouter, Route, Switch } from 'react-router-dom/'
import { Component } from 'react'

import Home from "./components/Home"
import About from './components/About'
import ThemeContext from './context/ThemeContext'

class App extends Component {
  state ={isDarkTheme: false}

  onClickTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  render() {
    const {isDarkTheme} = this.state

    return (
      <ThemeContext.Provider 
        value={{isDarkTheme, onClickTheme: this.onClickTheme}}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </BrowserRouter>
      </ThemeContext.Provider>
)}}

export default App;
