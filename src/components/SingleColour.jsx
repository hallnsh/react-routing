import { useParams } from "react-router-dom";

export default function SingleColour() {
    const {colour_name} = useParams();
    console.log(colour_name);
    return (
        
        <h2 className={`heading__${colour_name}`}>
            {`This is the ${colour_name} from SingleColour.jsxs`}
        </h2>
    )
}