// we use Link to be able to redirect to another page, and useParams to get the value passed in the url
import { Link, useParams } from "react-router-dom";

// import data
import { subjects } from "../data/subjects";

// import components
import SubjectCard from "../components/SubjectCard";

export default function Course() {

    const { course } = useParams(); // useParams() returns an object, so we save it to deconstruct it to the variable course

    const [current] = subjects.filter((el) => el.subject === course);   // here we deconstruct again, as the result of the filter returns an array

    return (
        <>
            {/* here we use the spread operator, so that the object inside the variable current delivers all properties at once.
            another way is to pass individually, like current.subject, current.description, etc, to the correct parameters inside SubjectCard component */}
            <SubjectCard {...current} />
            <Link to="/courselist">Back to courses list</Link>
        </>
    );
}