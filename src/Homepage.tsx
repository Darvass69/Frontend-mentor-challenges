import {useState} from "react";
import {Link} from "wouter";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./Homepage.scss";
import {Button} from "my-first-package";

export default function DefaultHomepage() {
  const [count, setCount] = useState(0);
  return (
    <div className="homepage">
      <div>
        <div>
          {/* TODO We need to get all the challenges and dynamically create links to them */}
          <div className="vertical-stack">
            <div>
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
            <Button onClick={() => setCount((count) => count + 1)}>
              Count is {count}
            </Button>
            <Button onClick={() => setCount(0)}>Reset</Button>

            <Link href="/">Home</Link>
            <Link href="/test">Test</Link>
            <Link href="/QR-code-component">
              1st challenge: QR code component
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
