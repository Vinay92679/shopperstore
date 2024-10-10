import { NavLink } from "react-router-dom";
import "./Common.css"

const PageNavigation = ({title}) => {
return(
<>
 <NavLink id="page_navigation" className="ms-md-4" to="/">Home</NavLink> / {title}
</>
)
}

export default PageNavigation;