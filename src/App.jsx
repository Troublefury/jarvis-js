import { useState } from 'react'
import './App.css'
import { useBookStore } from './store/bookstore';
import { BlankScreen } from './components/screen';
import { ClippedDrawer } from './components/Sidebar/sidebar';
import Environment from './components/Pages/environment.jsx';

function App() {
  const amount = useBookStore(state => state.amount)
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
   setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      
      <BlankScreen />
      <Environment />
      <toggleDrawer open={drawerOpen} onClose={toggleDrawer} />
      { /*<Switch>
        <Route path="/" exact component={Home} />
        <Route path="/environment" component={Environment} />
  </Switch>*/ }
    </>
  )
}

export default App
