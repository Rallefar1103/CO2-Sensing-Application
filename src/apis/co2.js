export const getCO2Measurement = async () => {
  try {
    const response = await fetch("");

    const json = await response.json();
    return response.body;
  } catch (e) {
    if (e instanceof Error) {
      throw e;
    }
    throw new Error("getC02Measurement unexpected error");
  }
};