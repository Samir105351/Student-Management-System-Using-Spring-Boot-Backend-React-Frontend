import './App.css';
import HeaderComponent from './components/HeaderComponent';
import FooterComponents from './components/FooterComponents';
import ListStudentComponents from './components/ListStudentComponents';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CreateStudentComponent from './components/CreateStudentComponent';
import UpdateStudentComponent from './components/UpdateStudentComponent';
function App() {
  return (
   <div>
      <Router>
      <HeaderComponent/>
      <div className='container'>
        <Switch>
          <Route path="/" exact component={ListStudentComponents}></Route>
          <Route path="/students/" component={ListStudentComponents}></Route>
          <Route path="/add-students/" component={CreateStudentComponent}></Route>
          <Route path="/update-students/:id" component={UpdateStudentComponent}></Route>
        </Switch>
      </div>
      <FooterComponents/>
      </Router>
   </div> 
  );
}

export default App;
