import { getData } from "./network";


export const getTopStories = () => getData<number[]>("/topstories.json");

export const getNewStories = () => getData<number[]>("/newstories.json");

export const getBestStories = () => getData<number[]>("/beststories.json");