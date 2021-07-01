## 반응형 REACT-PORTFOLIO

### * Swiper 사용하여 슬라이드 구현
swiper 설치하기
```javascript 
npm instrall swiper
```
HTML 레이아웃에 추가할 Swiper, SwiperSlide 불러와서 감싸주기
```javascript
import { Swiper, SwiperSlide } from 'swiper/react';

 <Swiper>
     {
        projects.map((project, idx) => {
            if(idx >= 5) return;
            return (
                <SwiperSlide key={project.id}>
                    <ProjectItem
                    title={project.name}
                    img={project.img}
                    desc={project.desc}
                    />
                </SwiperSlide>
            );
        })
    }
 </Swiper>
 ```
Swiper 태그 안에 슬라이드간의 간격과 보여질 슬라이드 갯수 설정하고, breakpoint 설정해주기
```javascript
<Swiper 
    spaceBetween={30} 
    slidesPerView={2} 
    navigation
    breakpoints={{   
        //when window width is >= 640
        640: {
            slidesPerView:1,
        },
        //when window width is >= 768
        768:  {
            slidesPerView:2,
        },
        //when window width is >= 1200
        1200:  {
            slidesPerView:3,
        }
    }}
>
```
슬라이드 이동을 위한 navigation을 사용하기 위해 SwiperCore를 불러오기
```javascript
import SwiperCore, { Navigation } from 'swiper'; 

SwiperCore.use([Navigation]);
```
swiper 스타일링을 위한 css 불러오기
```javascript
import 'swiper/swiper-bundle.min.css';
```
