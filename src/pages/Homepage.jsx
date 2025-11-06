// import useState react hook
import { useState } from "react";

// import components
import Button from "../components/Button";


export default function Homepage() {

    // create a react hook, initial value is 0
    const [count, setCount] = useState(0);

    // this is a function we'll call upon clicking one of the buttons. it is sent to the onClick html button property, which we return inside the Button component
    function callMyFunction(text) {
        console.log(text);
    }

    return (
        <>
            <h1>This is the homepage!</h1>

            // Here we just increment the "count" value using "setCount", each time we click. we also display the current "count" value in the button text 
            // also, we're passing the value of count to the property isZero, that we're using in the Button component to style the component based on the count value     
            <Button isZero={!count} handleClick={() => setCount(count => count + 1)}>Counter: {count}</Button>

            // this component will make use of the callMyFunction function, where it passes it a string as an argument, which the function then logs to the console
            <Button handleClick={() => callMyFunction('Hello there')}>console.log</Button>
        </>
    );
}