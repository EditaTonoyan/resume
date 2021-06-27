import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Slider from './components/slider/Slider';
import BuildResume from './components/resume/BuildResume';


const router = [
  {
    path: "/",
    component: Slider,
    exact: true
  },
  {
    path: "/build-resume",
    component: BuildResume,
    exact: true
  }
]

function App() {

  const pages = router.map((page, index) => {

    return (
      <Route

        key={index}
        path={page.path}
        component={page.component}
        exact={page.exact}
      />

    )
  })
  return (
    <div >
      <BrowserRouter>
        <Switch>
          {pages}
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
