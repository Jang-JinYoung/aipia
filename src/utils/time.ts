// src/utils/time.ts

/**
 * 유닉스 타임스탬프(초 단위)를 YYYY-MM-DD 포맷 문자열로 변환
 * @param timestamp number | string (초 단위)
 * @returns string (예: "2025-11-22")
 */
export const getFormatDate = (timestamp: string): string => {
    const ts = Number(timestamp) * 1000; // 초 → 밀리초 변환
    const date = new Date(ts);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
};
