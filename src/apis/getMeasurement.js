import { getHumidityMeasurement } from "./humidity";
import { getTemperatureMeasurement } from "./temperature";
import { getCO2Measurement } from "./co2";

export const getMeasurement = async (type) => {
  if (type === "CO2") {
    return await getCO2Measurement();
  }

  if (type === "Temperature") {
    return await getTemperatureMeasurement();
  }

  return await getHumidityMeasurement();
};
