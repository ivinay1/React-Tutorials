// this function represents the working of the working of the react, the eleent of jsx which is converted by babel when it gets to the react in the from of JS object with type,props and children which react understands then it makes a dom element which holds the type,props and children of the given element and after that it appends it to the MainContainer
// react mein bhi continuosly yeh cheez functin waali hoti rehti hai aur tree bnta rehta hai aur component rendr hote rehte hai and they are injected

function customRender(reactElement,MainContainer)
{
    // this way is good but na we have to setAttribute for every line which is not quite good so we will use loop for this task
    // const domElement = document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('href','https//google.com');
    // domElement.setAttribute('target','_blank');

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    for(const[key,value] of Object.entries(reactElement.props))
    {
        domElement.setAttribute(key,value);
    }

    MainContainer.appendChild(domElement); // adding to the main container where we have to render the component
}


// this is the way by which a element which is rendered by react gets to react after compiled by 'babel' which is transpiler for converting JSX to javascript  
const reactElement = {

    type: 'a',
    props: {
        href: 'https//google.com',
        target: '_blank'
    },
    children: 'click me to visit google.com'
}


const MainContainer = document.querySelector(".root"); // taking out root jaha pr react components ko render karega

customRender(reactElement,MainContainer)  // this is the function which will render our react component inside the main container