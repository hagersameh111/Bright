import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  timeout: 10000,
});

const fetchNews = async (
  endpoint,
  params = {}
) => {
  try {
    const { data } = await api.get("/news", {
      params: {
        endpoint: endpoint.replace("/", ""),
        lang: "en",
        max: 20,
        ...params,
      },
    });

    return data.articles || [];
  } catch (error) {
    console.error(
      "GNews Error:",
      error.response?.data || error.message
    );

    return [];
  }
};

export const getTopNews = () =>
  fetchNews("/top-headlines", {
    country: "us",
  });

export const getPoliticsNews = () =>
  fetchNews("/search", {
    q: "politics",
    sortby: "publishedAt",
  });

export const getWorldNews = () =>
  fetchNews("/search", {
    q: "world",
    sortby: "publishedAt",
  });

export const getBusinessNews = () =>
  fetchNews("/search", {
    q: "business",
    sortby: "publishedAt",
  });

export const getTechnologyNews = () =>
  fetchNews("/search", {
    q: "technology",
    sortby: "publishedAt",
  });

export const getMiddleEastNews = () =>
  fetchNews("/search", {
    q: "middle east",
    sortby: "publishedAt",
  });

export const searchNews = (query) =>
  fetchNews("/search", {
    q: query,
    sortby: "publishedAt",
  });

export const getBreakingPoliticsNews = () =>
  fetchNews("/search", {
    q: "politics",
    max: 15,
    sortby: "publishedAt",
  });