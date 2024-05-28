import { Link } from "wouter";
import "./attribution.css"
import { HtmlHTMLAttributes } from "react";


interface AttributionProps extends HtmlHTMLAttributes<HTMLDivElement> {
  bgColor?: string
  textColor?: string
  label?: string
}

export default function Attribution(props: AttributionProps): React.JSX.Element {
  
  
  return (
    <div  {...props} {...(props.className ? {className: props.className + " attribution"} : {className: "attribution"})}>
        <div className="home">
          <Link href="/">Home</Link>
        </div>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://www.frontendmentor.io/profile/Darvass69" target="_blank">Darvass</a>.
    </div>
  );
}
