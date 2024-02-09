import "./developer.css"
import developerphoto from "../../assets/developerphoto.jpg"
console.log(developerphoto)
function Developer () {
    // const developerphoto = developerphoto;
    return (
        <div className="developerBio">
            <p className="developerBioTextItem">
            Hello! Welcome to EliteEasy, a clone of the New York City real-estate website. I created this, my first fullstack project, while shopping for a place to live in the city; the rent is too dang high.
            </p>
            <br/>
            <p className="developerBioTextItem">
            I built this single-page app using React for the frontend with Redux for state management, Ruby-on-Rails for the backend, and PostgresQL to store data. This app remains a work in progress, as I revise its content and implementation, in order to learn from my beginners mistakes.
            </p>
            <br/>
            <p className="developerBioTextItem">
            I appreciate the staff of App Academy, and my fellow cohort of new developers, for their guidance and encouragement throughout the process of the site's creation, and for helping me discover the skill that has become my life's work to develop.
            </p>
            <img src="developerphoto"/>
        </div>
    )
}

export default Developer