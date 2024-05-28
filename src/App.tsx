import {Route, Router, Switch} from "wouter";

import QRCodeComponent from "./challenges/qr-code-component-main/QRCodeComponent";
import Homepage from "./Homepage";

import viteLogo from "/vite.svg";
import {Helmet} from "react-helmet";
import {Button} from "my-first-package";
import {useHashLocation} from "wouter/use-hash-location";
// import BlogPreviewCard from "./challenges/blog-preview-card-main/BlogPreviewCard";

export default function App(): React.JSX.Element {
  return (
    <>
      <Router hook={useHashLocation}>
        <Switch>
          <Route path="/test" component={() => <Test/>} />
          {/* <Route path="/test1" component={() => <Test nbObjects={40} />} />
          <Route path="/test2" component={() => <Test type={2}/>} />
          <Route path="/test3" component={() => <Test nbObjects={40} type={2}/>} /> */}
          
          <Route path="/QR-code-component" component={QRCodeComponent} />
          {/* <Route path="/Blog-preview-card" component={BlogPreviewCard}/> */}

          {/*~ param example ~*/}
          {/* <Route path="/users/:name">
          {(params) => <>Hello, {params.name}!</>}
        </Route> */}

          {/* Default route in a switch */}
          <Route>
            <Helmet>
              <title>Frontend Mentor Challenges</title>
              <link rel="icon" type="image/svg+xml" href={viteLogo} />
            </Helmet>
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

function Test({nbObjects, type} : {nbObjects?: number, type?:number}) {
  nbObjects = nbObjects ?? 5;
  //TODO
  // Fix no scroll pages on mobile: we need to hide the address bar in pages that have no overflow/scrollable content.
  // At the moment, we always have the address bar and its annoying.

  const toggleFullScreen = (): void => {};

  

  return (
    <>
      <div
        style={{
          backgroundColor: "hsl(212, 45%, 89%)",
          width: "100%",
          height: type == 2 ? "100vh" : "100%",
          alignContent: "center",
        }}
      >
        <Button
          style={{marginInline: "auto", display: "block"}}
          onClick={toggleFullScreen}
        >
          Test
        </Button>
        {/* <img src={viteLogo} style={{marginInline: "auto"}} /> */}
        {Array.from(Array(nbObjects).keys()).map(() => <img src={viteLogo} style={{marginInline: "auto"}} />)}
      </div>
    </>
  );
}
