import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePhotos } from './PhotoContext';

const AddPic = () => {
    const [imageSrc, setImageSrc] = useState(null);
    const [title, setTitle] = useState('');
    const [date, setDate] = useState(new Date().toLocaleDateString());
    const navigate = useNavigate();
    const { addPhoto } = usePhotos();

    const loadFile = (event) => {
        const file = event.target.files[0];
        if(file) {
            const reader = new FileReader();

            reader.onload = (e) => { // 파일을 성공적으로 읽으면 호출되는 콜백 함수
                setImageSrc(e.target.result);
            }

            // 파일을 Data URL 형식으로 읽음
            reader.readAsDataURL(file);
        }
    };

    const handleSave = () => {
        if(title && imageSrc) {
            addPhoto({ imageSrc, title, date });
            alert(title + " 저장이 완료되었습니다");
            navigate('/');
        }
        else if (title) {
            alert("이미지를 선택해주세요")
        }
        else if (imageSrc) {
            alert("제목을 입력해주세요")
        }
        else {
            alert("제목과 이미지를 모두 입력해주세요")
        }
    }

    return (
        <div>
            <div>
                <input type="file" accept="image/*" onChange={loadFile} />
                <div className="image-show" id="image-show">
                    {imageSrc && <img src={imageSrc} alt="Preview" style={{ maxWidth: '100%', maxHeight: '300px' }} />} 
                </div>
            </div>
            <div>
                <input type="text" placeholder="제목" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <button onClick={handleSave}>저장하기</button>
                <button onClick={()=>navigate('/')}>취소하기</button>
            </div>
        </div>
    );
}

export default AddPic;