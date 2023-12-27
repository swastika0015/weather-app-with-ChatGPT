import { gql } from "@apollo/client";

const fetchWeatherQuery = gql`
  query MyQuery  (
    $current_weather: String
    $daily: String = "weather_code,temperature_2m,temperature_2m_max, temperature_2m_min, uv_index, uv_index_clear_sky,rain,snowfall"
    $hourly: String = "weather_code,temperature_2m,temperature_2m_max, temperature_2m_min, uv_index, uv_index_clear_sky,rain,snowfall"
    $latitude: String!
    $longitude: String!
    $timezone: String!
    ) {
    myQuery(
        current_weather: $$current_weather
        daily: $daily
        hourly: $hourly
        latitude: $latitude
        timezone: $timezone
        longitude: $longitude
    ) {
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
      timezone_abbreviation
      timezone
      utc_offset_seconds
      hourly_units {
        dew_point_2m
        rain
        temperature_2m
        snowfall
        relative_humidity_2m
        showers
        time
        uv_index
        uv_index_clear_sky
        wind_speed_10m
      }
      hourly {
        dew_point_2m
        relative_humidity_2m
        showers
        time
        uv_index_clear_sky
        uv_index
        wind_speed_10m
        snowfall
        temperature_2m
        rain
      }
    }
  }
`;

export default fetchWeatherQuery;