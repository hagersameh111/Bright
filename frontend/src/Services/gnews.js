import axios from "axios";

const API_KEY = import.meta.env.VITE_GNEWS_API_KEY;

const api = axios.create({
baseURL: "https://gnews.io/api/v4",
timeout: 10000,
});

const fetchNews = async (
endpoint,
params = {}
) => {
try {
const { data } = await api.get(
endpoint,
{
params: {
lang: "en",
max: 20,
apikey: API_KEY,
...params,
},
}
);


return data.articles || [];


} catch (error) {
console.error(
"GNews Error:",
error.response?.data ||
error.message
);


return [];


}
};

// Latest News
export const getTopNews = () =>
fetchNews("/top-headlines", {
country: "us",
});

// Politics
export const getPoliticsNews = () =>
fetchNews("/search", {
q: "politics",
sortby: "publishedAt",
});

// World
export const getWorldNews = () =>
fetchNews("/search", {
q: "world",
sortby: "publishedAt",
});

// Business
export const getBusinessNews = () =>
fetchNews("/search", {
q: "business",
sortby: "publishedAt",
});

// Technology
export const getTechnologyNews = () =>
fetchNews("/search", {
q: "technology",
sortby: "publishedAt",
});

// Middle East
export const getMiddleEastNews = () =>
fetchNews("/search", {
q: "middle east",
sortby: "publishedAt",
});

// Search
export const searchNews = (
query
) =>
fetchNews("/search", {
q: query,
sortby: "publishedAt",
});

// Breaking News
export const getBreakingPoliticsNews =
() =>
fetchNews("/search", {
q: "politics",
max: 15,
sortby: "publishedAt",
});
