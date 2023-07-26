import {Badge} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
export const GenreBadgeComponent = ({badge}) => {
    return(
        <Badge color='primary' pill>
            {badge}
        </Badge>
        )
}