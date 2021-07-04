import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import ScrollBar from 'react-smooth-scrollbar';

const SmoothScrollbar = ({children}) => {
    const ref = useRef(null)
    const{ pathname } = useLocation()

    //새 페이지가 로드될때마다 해당 페이지 상단이 보이게 하기
    useEffect(() => {
        const { scrollbar } = ref.current
        scrollbar.setPosition(0, 0)
    },[pathname])

    return (
        <div>
            {/* damping 값이 낮을수록 스크롤이 부드러워짐 */}
            <ScrollBar ref={ref} damping=".09"> 
            {/* ScrollBar로 감싸진 모든 컴포넌트에 적용 */}
                {children} 
            </ScrollBar>
        </div>
    );
};

export default SmoothScrollbar;