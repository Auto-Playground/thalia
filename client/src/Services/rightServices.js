import thaliaAPI from "../API/thaliaAPI";

export const createRight = async (rightDetails) => {
  try {
    const response = await thaliaAPI.post("/admin/rights", rightDetails, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    return error;
  }
};
export const editRight = async (rightDetails, rightId) => {
  try {
    const response = await thaliaAPI.put(
      `/admin/rights/${rightId}`,
      rightDetails,
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
export const getRight = async (page) => {
  try {
    const response = await thaliaAPI.get(
      `/admin/rights?page=${page}`,
      {},
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
export const getDelete = async (rightId) => {
  try {
    const response = await thaliaAPI.delete(
      `/admin/rights/${rightId}`,
      {},
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
