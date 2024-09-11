import React, { createContext, useContext, useState } from 'react';

// Context 생성
const PhotoContext = createContext();

// Custom Hook
export const usePhotos = () => {
    return useContext(PhotoContext);
};

// Provider 컴포넌트
export const PhotoProvider = ({ children }) => {
    const [photos, setPhotos] = useState([]); // 사진 상태

    // 사진 추가 함수
    const addPhoto = (photo) => {
        setPhotos((prevPhotos) => [...prevPhotos, photo]);
    };

    return (
        <PhotoContext.Provider value={{ photos, addPhoto }}>
            {children}
        </PhotoContext.Provider>
    );
};
