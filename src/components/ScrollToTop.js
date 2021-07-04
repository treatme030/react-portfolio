import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const {pathname} = useLocation()

    //새 페이지가 로드될때마다 해당 페이지 상단이 보이게 하기
    useEffect(() => {
        window.scrollTo(0, 0)
    },[pathname])

    return null;
};

export default ScrollToTop;