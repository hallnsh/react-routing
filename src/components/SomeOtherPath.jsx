import { useParams } from "react-router-dom";

export default function SomeOtherPath() {
    const {colour_name} = useParams();
    console.log(colour_name);
    return (
        
        <h2>
            {`These are NOT the paths you are looking for!`}
        </h2>
    )
}