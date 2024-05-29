import {useState} from "react";
import {Link} from "wouter";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./Homepage.scss";
import {Button} from "my-react-component-library";

export default function Homepage() {
  const [count, setCount] = useState(0);
  return (
    <div className="homepage">
          {/* TODO We need to get all the challenges and dynamically create links to them */}
          <div className="vertical-stack">
            <h1>
              Frontend Mentor Challenges
            </h1>
            <div className="horizontal-stack">
              <img
                src={viteLogo}
                className="logo animate-logo"
                alt="Vite logo"
              />
              <img
                src={reactLogo}
                className="logo react animate-logo"
                alt="React logo"
              />
            </div>

            <MarginAuto directions={["Bottom", "Top"]}/>
            <div>
              Made using <a href="https://github.com/Darvass69/my-react-component-library">my-react-component-library</a>
            </div>

            <MarginAuto directions={["Bottom", "Top"]}/>
            
            <Button onClick={() => setCount((count) => count + 1)}>
              Count is {count}
            </Button>
            <Button onClick={() => setCount(0)}>Reset</Button>

            <Link href="/">Home</Link>
            <Link href="/test">Test</Link>
            {/* <Link href="/test">%, small content</Link>
            <Link href="/test1">%, big content</Link>
            <Link href="/test2">vh, small content</Link>
            <Link href="/test3">vh, big content</Link> */}
            <Link href="/QR-code-component">
              1st challenge: QR code component
            </Link>
            <Link href="/Blog-preview-card">
              2nd challenge: Blog preview card
            </Link>
            <Link href="/Recipe-page">
              3rd challenge: Recipe page
            </Link>
            <MarginAuto directions={["Bottom"]}/>
      </div>
    </div>
  );
}

function MarginAuto({directions}: {directions: ("Bottom" | "Top" | "Left" | "Right")[]}) {
  const margin: {[direction: string]: "auto"} = {};
  directions?.forEach((direction) => {margin["margin" + direction] = "auto"})
  return <div style={margin} />
}
