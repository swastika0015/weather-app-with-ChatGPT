interface Daily {
    temperature_2m_max: [number];
    temperature_2m_min: [number];
    time: [string];
    weather_code: [number];
}

interface DailyUnits {
    temperature_2m_max: string;
    temperature_2m_min: string;
    time: string;
    weather_code: string;
}

interface Hourly {
    dew_point_2m: [number];
    rain: [number];
    relative_humidity_2m: [number];
    showers: [number];
    snowfall: [number];
    temperature_2m: [number];
    time: [DateTime]
    uv_index: [number];
    uv_index_clear_sky: [number];
    wind_speed_10m: [number];
}

interface HourlyUnits {
    dew_point_2m: string;
    rain: string;
    relative_humidity_2m: string;
    showers: string;
    snowfall: string;
    temperature_2m: string;
    time: string;
    uv_index: string;
    uv_index_clear_sky: string;
    wind_speed_10m: string;
}

interface Root {
    daily: Daily; 
    daily_units: DailyUnits
    elevation: number;
    generationtime_ms: number;
    hourly: Hourly
    hourly_units: HourlyUnits
    latitude: number;
    longitude: nuumber;
    timezone: string;
    timezone_abbreviation: string;
    utc_offset_seconds: number;
}

