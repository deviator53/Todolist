import Home from './components/home/Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

import './App.css';

function App() {
  return (
    <>
    <Router>
    <div>
      <Home/>
    </div>
    </Router>
    <Toaster
     position="top-right"
     toastOptions={{
       duration: 5000,
       style:{
         color: 'white'
       },
       success:{
         style:{
           background: 'green',
         },
       },
       error:{
         style:{
           background: 'red',
         },
       },
     }}
     />
    </>
  );
}

export default App;
