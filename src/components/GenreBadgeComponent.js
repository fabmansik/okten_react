import {Badge} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
export const GenreBadgeComponent = ({badge}) => {
    return(
            <Badge color='secondary' className='badge' pill>
                {badge}
            </Badge>
        )
}