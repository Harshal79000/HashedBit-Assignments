import { Link } from "react-router-dom";
import "./App.css";
const Choose =()=>{
    return (
      <>
        <Link to="/takeSurvey"><button className="btn btn-info m-3">Take Survey</button></Link>
      </>
    );
}

export default Choose;