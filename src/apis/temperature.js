export const getTemperatureMeasurement = async () => {
  try {
    console.log("Temperature");
    // const response = await fetch("");
    // const json = await response.json();
    // return response.body;
  } catch (e) {
    if (e instanceof Error) {
      throw e;
    }
    throw new Error("getTemperatureMeasurement unexpected error");
  }
};
