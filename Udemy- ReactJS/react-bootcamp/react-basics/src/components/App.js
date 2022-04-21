import ClassComponent from './basic-concepts/fundamentals/ClassComponent';
import FunctionalComponent from './basic-concepts/fundamentals/FunctionalComponent'
import Content from './ecosystems/Content';
import Footer from './ecosystems/Footer';
import Header from './ecosystems/Header';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
