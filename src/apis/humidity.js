export const getHumidityMeasurement = async () => {
  try {
    console.log("Humidity");
    return "Humidity data";
    // const response = await fetch("");
    // const json = await response.json();
    // return response.body;
  } catch (e) {
    if (e instanceof Error) {
      throw e;
    }
    throw new Error("getHumidityMeasurement unexpected error");
  }
};
