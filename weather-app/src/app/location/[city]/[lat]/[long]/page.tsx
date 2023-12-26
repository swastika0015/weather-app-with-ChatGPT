import { Props } from "react-select";

type props = {
    params: {
        city: string;
        lat: string;
        long: string;
    }
}

function WeatherPage ({params : {city, lat, long } }: Props) {
    return (
        <div> 
            Welcome to Weather Page: {city} {lat} {long}
        </div>
    )
}

export default WeatherPage;