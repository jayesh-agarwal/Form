import './App.css';
import Form from './form';
import Header from './header';
import Footer from './footer';
import App1 from './App1';
import { Route, Switch } from "react-router";
import Navbar from './link';
import AppHome from './AppHome';


function App() {
  return (
    <div>
      {/* <Header />
      <Form />
      <Footer /> */}
      <Navbar />
        <Switch>
            <Route path = '/' exact component={AppHome} />
            <Route path = '/app' exact component={App1} />
            <Route path = '/header' component={Header} />
            <Route path = '/form' component={Form} />
            <Route path = '/footer' component={Footer} />
        </Switch>
    </div>
  );
}

export default App;
