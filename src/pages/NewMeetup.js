import { useNavigate } from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupsPage(props) {
    const history = useNavigate();
  function addMeetupHandler(meetupdata) {
    fetch(
      "https://react-starter-ada8c-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupdata),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
        history('/');
    });
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupsPage;
