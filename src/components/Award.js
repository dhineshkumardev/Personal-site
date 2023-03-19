import { Link } from "react-router-dom";
import './Awards.css';
export const Award =(props = {}) => {
    const butt= props.bname || "";
    return(
        <div>
            <h1>{props.head}</h1>
            <p>{props.body}</p>
            {butt && <Link to={props.Url} className='link' target="_blank">{props.bname}</Link>}
        </div>
    );
}