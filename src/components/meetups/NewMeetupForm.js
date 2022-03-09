import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm(props) {
  const titleInputref = useRef();
  const imageInputref = useRef();
  const addressInputref = useRef();
  const descriptionInputref = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredtitle = titleInputref.current.value;
    const enteredimage = imageInputref.current.value;
    const enteredaddress = addressInputref.current.value;
    const entereddescription = descriptionInputref.current.value;

    const meetupdata = {
      title: enteredtitle,
      image: enteredimage,
      address: enteredaddress,
      description: entereddescription,
    };
    props.onAddMeetup(meetupdata);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputref} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputref} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address"> Address</label>
          <input type="text" required id="address" ref={addressInputref} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description </label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputref}
          ></textarea>
        </div>
        <div className="classes.action">
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
