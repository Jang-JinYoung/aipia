import axios from "axios";

// 공통 axios 인스턴스 생성
const axiosInstance = axios.create({
    baseURL: "https://hacker-news.firebaseio.com/v0", // API 기본 URL
    timeout: 5000, // 요청 제한 시간 (ms)
    headers: {
        "Content-Type": "application/json",
    },
});

// 요청 인터셉터 (예: 토큰 자동 추가)
axiosInstance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => Promise.reject(error)
);

// 응답 인터셉터 (에러 핸들링)
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        return Promise.reject(error);
    }
);

export const getData = async <T>(url: string): Promise<T> => {
  const response = await axiosInstance.get<T>(url);
  return response.data;
};


export default axiosInstance;
