import styles from './body.module.scss'
import Header from '../Header/Header'
import { Switch, Route, Redirect } from "react-router-dom"
import Quotes from '../../pages/Quotes/Quotes'
import Projects from '../../pages/Projects/Projects'
import Clients from '../../pages/Clients/Clients'
import Suppliers from '../../pages/Suppliers/Suppliers'
import Messages from '../../pages/Messages/Messages'

export default function Body() {
  return (
    <div className={styles.Body}>
      <Header />

      <Switch>
        <Route exact path="/">
          <Redirect to="/quotes" />
        </Route>
        <Route exact path="/quotes">
          <Quotes />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/messages">
          <Messages />
        </Route>
        <Route exact path="/suppliers">
          <Suppliers />
        </Route>
        <Route exact path="/clients">
          <Clients />
        </Route>
      </Switch>
    </div>
  )
}
