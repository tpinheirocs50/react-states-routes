import './Button.css'

// handleClick is the property we use to pass a function we want to execute onClick
// children is for the button to get it's name inside <Button>...</Button> component tags
// isZero is passed an expression that evaluates to true or false, which we can then use to apply styles dynamically using className
export default function Button({ handleClick, children, isZero }) {

    return <button className={isZero ? 'is-empty' : ''} onClick={handleClick}>{children}</button>
}