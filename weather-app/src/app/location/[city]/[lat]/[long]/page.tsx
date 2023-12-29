import { Props } from "react-select";
import { getClient } from "../../../../../../apollo-client";
import fetchWeatherQuery from "../../../../../../graphql/queries/fetchWeatherQueries";

type props = {
    params: {
        city: string;
        lat: string;
        long: string;
    }
}

async function WeatherPage ({params : {city, lat, long } }: Props) {
    const client = getClient();

    const { data } = await client.query({
        query: fetchWeatherQuery,
        variables: {
            current: "true",
            longitude: long,
            latitude: lat,
        }
    })
    const results: Root = data.myQuery;
    console.log(results)
    
    return (
        <div> 
            Welcome to Weather Page: {city} {lat} {long}
        </div>
    )
}

export default WeatherPage;