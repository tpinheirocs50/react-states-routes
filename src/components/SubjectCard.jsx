import './SubjectCard.css'

// the three parameters here are passed upon the calling of the component
export default function SubjectCard({ subject, description, website }) {
    return (
        <div className="subject-card">
            <h1>{subject}</h1>
            <h2>{description}</h2>
            <h4>{website}</h4>
        </div>
    );
}