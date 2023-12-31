import { Props } from "react-select";
import { getClient } from "../../../../../../apollo-client";
import fetchWeatherQuery from "../../../../../../graphql/queries/fetchWeatherQueries";
import CalloutCard from "../../../../../../components/CalloutCard";
import StatCard from "../../../../../../components/StatCard";
import InformationPanel from "../../../../../../components/InformationPanel";

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
              
            <div className="m-2 mb-10">
              <CalloutCard message={content} />
           
            </div>

         
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 m-2">
              <StatCard
                title="Maximum Temperature"
              
                metric={`${results.daily.temperature_2m_max[0].toFixed(1)}°`}
                color="yellow"
              />
              <StatCard
                title="Minimum Temperature"
                metric={`${results.daily.temperature_2m_min[0].toFixed(1)}°`}
                color="green"
              />

              <div className="flex space-x-4">
                <StatCard
                  title="UV Index"
                  metric={`${results.daily.uv_index_max[0].toFixed(1)}`}
                  color="rose"
                />
                {Number(results.daily.uv_index_max[0].toFixed(1)) > 9 && (
                  <CalloutCard
                    message={"The UV is high today."}
                    warning
                  />
                )}              
              </div>

              <div className="flex space-x-2">
                <StatCard
                  title="Wind Speed"
                  metric={`${results.current_weather.windspeed.toFixed(1)}m/s`}
                  color="cyan"
                />
                <StatCard
                  title="Wind Direction"
                  metric={`${results.current_weather.winddirection.toFixed(1)}°`}
                  color="violet"
                />
              </div>
            </div>
          </div>
          <hr className="mb-5" />
          </div>
      </div>
    </div>
  );
}

export default WeatherPage;