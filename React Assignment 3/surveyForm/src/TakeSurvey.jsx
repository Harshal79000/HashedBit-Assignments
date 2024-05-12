import "./App.css";
import { Link } from "react-router-dom";
const TakeSurvey = () => {
  return (
    <>
      <form className="question">
        <p>1.Which of the following job role you want to apply?</p>

        <input type="checkbox" id="frontend" name="frontend"></input>
        <label htmlFor="frontend">&nbsp; Frontend Developer</label><br></br>
        <input type="checkbox" id="backend" name="backend"></input>
        <label htmlFor="backend">&nbsp; Backend Developer</label><br></br>
        <input type="checkbox" id="fullstack" name="fullstack"></input>
        <label htmlFor="fullstack">&nbsp; FullStack Developer</label><br></br>
        <input type="checkbox" id="datascience" name="datascience"></input>
        <label htmlFor="datascience"> &nbsp;Data Science Engineer</label><br></br>
        <br />
        <p>2.How much Industry experience do you have?</p>
        <input type="radio" id="0-2" name="experience"></input>
        <label htmlFor="0-2">&nbsp;0-2 year</label>&nbsp;&nbsp;
        <input type="radio" id="3+" name="experience"></input>
        <label htmlFor="3+">&nbsp;3+ year</label><br></br>
      </form>
      <Link to="/response">
        <button type="submit" className="btn btn-success m-3 ">Confirm</button>
      </Link>

    </>
  );
}

export default TakeSurvey;
