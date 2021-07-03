## 반응형 REACT-PORTFOLIO👩🏻

###  🍀 Swiper 사용하여 슬라이드 구현
```javascript 
//npm
npm install swiper

//yarn
yarn add swiper
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
Swiper 컴포넌트 안에 슬라이드간의 간격과 보여질 슬라이드 갯수 설정하고, breakpoint 설정해주기
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

### 🍀 React Transition Group 
```javascript
// npm
npm install react-transition-group --save

// yarn
yarn add react-transition-group
```
SwitchTransition, CSSTransition를 불러와 transition이 적용될 부분을 감싸주기<br/>
CSSTransition 컴포넌트 안에 상태전환에 필요한 키값을 설정(데이터의 인덱스 사용)
```javascript
<SwitchTransition component={null}>
    <CSSTransition key={activeSlide.id} timeout={300} classNames="fade">
        <div className="testimonial__info">
            <div className="testimonial__desc">
                <PText>
                    {activeSlide.desc}
                </PText>
                <h2 className="testimonial__name">{activeSlide.name}</h2>
                <p className="testimonial__title">{activeSlide.title},<br/>{activeSlide.org}</p>
            </div>
        </div>
    </CSSTransition>
</SwitchTransition>
```
CSSTransition 컴포넌트에 classNames="fade"<br/>
transition이 enter/exit 될 때마다 클래스명이 변경됨<br/>
```jsvascript
<CSSTransition key={activeSlide.id} timeout={300} classNames="fade">
```
css로 변경되는 클래스명에 적용할 코드 작성
```jsvascript
.fade-enter {
        opacity: 0;
        transform: scale(.96);
 }
 .fade-enter-active {
     opacity: 1;
     transform: scale(1);
     transition: 250ms ease-in;
     transition-property: opacity, transform;
 }
 .fade-exit {
     opacity: 1;
     transform: scale(1);
 }
 .fade-exit-active {
     opacity: 0;
     transform: scale(.96);
     transition: 250ms ease-in;  
     transition-property: opacity, transform;                                                           
 }
 ```
