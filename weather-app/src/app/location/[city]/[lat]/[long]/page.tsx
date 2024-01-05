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
        <div className="flex flex-col min-h-screen md:flex-row">
        <InformationPanel city={city} long={long} lat={lat} results={results} />
        <div className="flex-1 p-6 lg:p-10">
          <div>
            <div className="p-5">
              <div className="pb-5">
                <h2 className="text-xl font-bold">Todays Overview</h2>
                <p className="text-sm text-gray-400">
                  Last Updated at:{" "}
                  {new Date().toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,                  
                  })} ({results.timezone})
                </p>
              </div>
    )
}

export default WeatherPage;