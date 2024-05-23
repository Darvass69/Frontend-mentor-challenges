import { Link } from "wouter";
import "./attribution.css"


export default function Attribution(): React.JSX.Element {
  return (
    <div className="attribution">
        <div className="home">
          <Link href="/">Home</Link>
        </div>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://www.frontendmentor.io/profile/Darvass69" target="_blank">Darvass</a>.
    </div>
  );
}
