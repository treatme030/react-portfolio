<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"><img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"><img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white"><img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">

## 👩🏻 반응형 [REACT-PORTFOLIO](https://juhee-react-portfolio.netlify.app/)

![pport](https://user-images.githubusercontent.com/74355328/147540060-97a2d0b3-40e2-42d9-a60d-618a9be35c81.gif)

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
```javascript
<CSSTransition key={activeSlide.id} timeout={300} classNames="fade">
```
css로 변경되는 클래스명에 적용할 코드 작성
```javascript
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
### 🍭 Footer 
col마다 안의 컨텐츠에 type이 'Link'인지에 따라 다른 링크 태그 적용
 ```javascript
 const Footer = () => {
    return (
        <FooterStyles>
           //<Link/> 적용
           <FooterCol heading="Important Links"
               links={[
                   {
                       title: 'Home',
                       path: '/',
                       type: 'Link'
                   }
               ]}
               />
 
          //<a></a> 적용
          <FooterCol heading="Contact Info"
               links = {[
                   {
                       title: '+880123',
                       path: 'tel:+880123'
                   }
               ]}
               />
  </FooterStyles>
    );
};
 
const FooterCol = ({
    heading,
    links = [
        {
            type: "Links",
            title: "Home",
            path: "/"
        }
    ]
}) => {
    return (
        <ColStyles>
            <h1 className="heading">{heading}</h1>
            <ul>
                {//type이 Link이면 <Link/>, 그렇지 않으면 <a></a>
                    links.map((item, index) => (
                    <li key={index}>
                        {item.type === 'Link' ? (
                        <Link to={item.path}>{item.title}</Link>
                        ) : (
                        <a href={item.path} target="_blank" rel="noreferrer">{item.title}</a>)}</li>)
                    )
                }
            </ul>
        </ColStyles>
    );
};
 ```
 
### 🍭 Projects
검색창에 입력된 값과 일치하는 데이터만 보여주기
 ```javascript
 const [project, setProject] = useState(projectInfo) //데이터
 const [searchText, setSearchText] = useState('') //입력값

 //입력된 값이 변경될때마다 입력된 값과 프로젝트 데이터의 이름과 일치하는 것만 보여주기
 useEffect(() => {
    if(searchText === '') return;
    setProject(() =>  
         project.filter(item => item.name.toLowerCase().match(searchText.toLowerCase())) 
    )
 }, [searchText])

 const handleChange = (e) => {
     e.preventDefault()
     setSearchText(e.target.value) //입력된 값
     if(!e.target.value.length){ //입력된 값이 없으면 모든 데이터 보여주기 --> 초기화
         setProject(projectInfo)
     }
 }
 ```
 
 ### 🍭 SmoothScrollBar
 ```javascript
 yarn add react-is smooth-scrollbar smooth-scrollbar-react
 ```
 부드러운 스크롤과 새 페이지가 로드될때마다 해당 페이지의 상단이 보이게 하기
 ```javascript
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import ScrollBar from 'react-smooth-scrollbar';

const SmoothScrollbar = ({children}) => {
    const ref = useRef(null) //특정 DOM 선택시 사용
    const{ pathname } = useLocation() //페이지 전환시 사용

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
```
App.js에 스크롤이 적용될 컴포넌트 감싸주기
```javascript
import SmoothScrollbar from './components/SmoothScrollbar';

function App() {
  return (
      <Router>
        <NavMenu/>
        <SmoothScrollbar>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/projects">
            <Projects/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
        </Switch>
        <Footer/>
        </SmoothScrollbar>
      </Router>
  );
}

export default App;
```
### 🌈 netlify.com 에서 배포하기
```javascript
yarn build
cd build
npm install netlify-cli -g
cd ..
netlify deploy
```

*참고: https://www.youtube.com/watch?v=esC2k9z7w2U&list=PLRv_Gd5w9e7mO-lGxKkNSWiAlsiZHnQYY&index=1

 

