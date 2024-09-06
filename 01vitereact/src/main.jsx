import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'


function App()
{
  return (
    <>
    <h1>hello brother !!!</h1>
    </>
  )
}

// if App() is ultimately gets converted to below format and then react renders it then why can't we directly render react component, we can do it but in react there is a pattern in which a component gets converted by JSX to object

// const reactElement = {

//   type: 'a',
//   props: {
//       href: 'https//google.com',
//       target: '_blank'
//   },
//   children: 'click me to visit google.com'
// }


// this is the pattern we use React's method "createELement" to create the element which react can render  
// first parameters of object will be autmatically understood by react as component to display
// second parameters of object will be autmatically understood by react as properties of the component which wil it display
 // third parameters of object will be autmatically understood by react as the text content holded by the component

const reactElement = React.createElement(
  'a', 
  {                              
      href: 'https//google.com',
      target: '_blank'
  },
  'click me to visit google.com'

)

// NOTE:-  if yu want write variables or evaluated Js expressions in jsx you can do it using curly braces {<write here>} but you cannot write loop or if-else here just only evaluated expressions for if-else and loops write inside function but above return


// we can directly use it to render
const anotherElement = (
  <a href="https://google.com">click me</a>
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* App();  */}
    <App />
    {/* both App() and <App/> will do the samething */}
    reactElement 
    {/* Now here reactElement is a direct element so we can render it directly */}
    anotherElement
  </StrictMode>,
)
