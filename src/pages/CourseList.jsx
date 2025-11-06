import { Link } from "react-router-dom";
import { subjects } from "../data/subjects";

export default function CourseList() {
    return (
        <>
            <h1>This is the CourseList page!</h1>
            <h2>Choose a subject:</h2>
            {/* here we iterate over all elements inside the "subjects" array, and map them to a Link component
            we must also pass a key property, which must be a unique value! preferably inside each item */}
            {subjects.map((el) => <Link className="course-link" key={el.subject} to={"/course/" + el.subject}>{el.subject}</Link>)}
        </>
    );
}