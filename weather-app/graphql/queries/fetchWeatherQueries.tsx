import { gql } from "@apollo/client";


const fetchWeatherQuery = gql`
  query MyQuery   {
    myQuery(
    current: "", 
    daily: "weather_code,temperature_2m,temperature_2m_max, temperature_2m_min, uv_index, uv_index_clear_sky,rain,snowfall", 
    hourly: "weather_code,temperature_2m,temperature_2m_max, temperature_2m_min, uv_index, uv_index_clear_sky,rain,snowfall", 
    longitude: "", 
    latitude: "") 
    {
      current {
        interval
        rain
        snowfall
        temperature_2m
        time
      }
      current_units {
        interval
        snowfall
        rain
        temperature_2m
        time
      }
      daily {
        temperature_2m_max
        temperature_2m_min
        time
        weather_code
      }
      elevation
      generationtime_ms
      daily_units {
        temperature_2m_max
        temperature_2m_min
        time
        weather_code
      }
      latitude
      longitude
      timezone
      hourly {
        dew_point_2m
        wind_speed_10m
        uv_index_clear_sky
        uv_index
        time
        temperature_2m
        snowfall
        showers
        relative_humidity_2m
        rain
      }
      hourly_units {
        wind_speed_10m
        uv_index_clear_sky
        time
        temperature_2m
        uv_index
        snowfall
        relative_humidity_2m
        showers
        rain
        dew_point_2m
      }
    }
  }
`;

export default fetchWeatherQuery;