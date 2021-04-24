import api from "./apiConfig";

export const getInvestments = async () => {
  try {
    const response = await api.get("investments");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getInvestment = async (id) => {
  try {
    const response = await api.post(`/investments/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createInvestment = async (investment) => {
  try {
    const response = await api.post("/investments", investment);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateInvestment = async (id, investment) => {
  try {
    const response = await api.put(`/investments/${id}`, investment);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteInvestment = async (id) => {
  try {
    const response = await api.delete(`/investments/$id`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
