<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"><img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"><img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white"><img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">

## ๐ฉ๐ป ๋ฐ์ํ [REACT-PORTFOLIO](https://juhee-react-portfolio.netlify.app/)

![pport](https://user-images.githubusercontent.com/74355328/147540060-97a2d0b3-40e2-42d9-a60d-618a9be35c81.gif)

###  ๐ Swiper ์ฌ์ฉํ์ฌ ์ฌ๋ผ์ด๋ ๊ตฌํ
```javascript 
//npm
npm install swiper

//yarn
yarn add swiper
```
HTML ๋ ์ด์์์ ์ถ๊ฐํ  Swiper, SwiperSlide ๋ถ๋ฌ์์ ๊ฐ์ธ์ฃผ๊ธฐ
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
Swiper ์ปดํฌ๋ํธ ์์ ์ฌ๋ผ์ด๋๊ฐ์ ๊ฐ๊ฒฉ๊ณผ ๋ณด์ฌ์ง ์ฌ๋ผ์ด๋ ๊ฐฏ์ ์ค์ ํ๊ณ , breakpoint ์ค์ ํด์ฃผ๊ธฐ
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
์ฌ๋ผ์ด๋ ์ด๋์ ์ํ navigation์ ์ฌ์ฉํ๊ธฐ ์ํด SwiperCore๋ฅผ ๋ถ๋ฌ์ค๊ธฐ
```javascript
import SwiperCore, { Navigation } from 'swiper'; 

SwiperCore.use([Navigation]);
```
swiper ์คํ์ผ๋ง์ ์ํ css ๋ถ๋ฌ์ค๊ธฐ
```javascript
import 'swiper/swiper-bundle.min.css';
```

### ๐ React Transition Group 
```javascript
// npm
npm install react-transition-group --save

// yarn
yarn add react-transition-group
```
SwitchTransition, CSSTransition๋ฅผ ๋ถ๋ฌ์ transition์ด ์ ์ฉ๋  ๋ถ๋ถ์ ๊ฐ์ธ์ฃผ๊ธฐ<br/>
CSSTransition ์ปดํฌ๋ํธ ์์ ์ํ์ ํ์ ํ์ํ ํค๊ฐ์ ์ค์ (๋ฐ์ดํฐ์ ์ธ๋ฑ์ค ์ฌ์ฉ)
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
CSSTransition ์ปดํฌ๋ํธ์ classNames="fade"<br/>
transition์ด enter/exit ๋  ๋๋ง๋ค ํด๋์ค๋ช์ด ๋ณ๊ฒฝ๋จ<br/>
```javascript
<CSSTransition key={activeSlide.id} timeout={300} classNames="fade">
```
css๋ก ๋ณ๊ฒฝ๋๋ ํด๋์ค๋ช์ ์ ์ฉํ  ์ฝ๋ ์์ฑ
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
### ๐ญ Footer 
col๋ง๋ค ์์ ์ปจํ์ธ ์ type์ด 'Link'์ธ์ง์ ๋ฐ๋ผ ๋ค๋ฅธ ๋งํฌ ํ๊ทธ ์ ์ฉ
 ```javascript
 const Footer = () => {
    return (
        <FooterStyles>
           //<Link/> ์ ์ฉ
           <FooterCol heading="Important Links"
               links={[
                   {
                       title: 'Home',
                       path: '/',
                       type: 'Link'
                   }
               ]}
               />
 
          //<a></a> ์ ์ฉ
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
                {//type์ด Link์ด๋ฉด <Link/>, ๊ทธ๋ ์ง ์์ผ๋ฉด <a></a>
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
 
### ๐ญ Projects
๊ฒ์์ฐฝ์ ์๋ ฅ๋ ๊ฐ๊ณผ ์ผ์นํ๋ ๋ฐ์ดํฐ๋ง ๋ณด์ฌ์ฃผ๊ธฐ
 ```javascript
 const [project, setProject] = useState(projectInfo) //๋ฐ์ดํฐ
 const [searchText, setSearchText] = useState('') //์๋ ฅ๊ฐ

 //์๋ ฅ๋ ๊ฐ์ด ๋ณ๊ฒฝ๋ ๋๋ง๋ค ์๋ ฅ๋ ๊ฐ๊ณผ ํ๋ก์ ํธ ๋ฐ์ดํฐ์ ์ด๋ฆ๊ณผ ์ผ์นํ๋ ๊ฒ๋ง ๋ณด์ฌ์ฃผ๊ธฐ
 useEffect(() => {
    if(searchText === '') return;
    setProject(() =>  
         project.filter(item => item.name.toLowerCase().match(searchText.toLowerCase())) 
    )
 }, [searchText])

 const handleChange = (e) => {
     e.preventDefault()
     setSearchText(e.target.value) //์๋ ฅ๋ ๊ฐ
     if(!e.target.value.length){ //์๋ ฅ๋ ๊ฐ์ด ์์ผ๋ฉด ๋ชจ๋  ๋ฐ์ดํฐ ๋ณด์ฌ์ฃผ๊ธฐ --> ์ด๊ธฐํ
         setProject(projectInfo)
     }
 }
 ```
 
 ### ๐ญ SmoothScrollBar
 ```javascript
 yarn add react-is smooth-scrollbar smooth-scrollbar-react
 ```
 ๋ถ๋๋ฌ์ด ์คํฌ๋กค๊ณผ ์ ํ์ด์ง๊ฐ ๋ก๋๋ ๋๋ง๋ค ํด๋น ํ์ด์ง์ ์๋จ์ด ๋ณด์ด๊ฒ ํ๊ธฐ
 ```javascript
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import ScrollBar from 'react-smooth-scrollbar';

const SmoothScrollbar = ({children}) => {
    const ref = useRef(null) //ํน์  DOM ์ ํ์ ์ฌ์ฉ
    const{ pathname } = useLocation() //ํ์ด์ง ์ ํ์ ์ฌ์ฉ

    //์ ํ์ด์ง๊ฐ ๋ก๋๋ ๋๋ง๋ค ํด๋น ํ์ด์ง ์๋จ์ด ๋ณด์ด๊ฒ ํ๊ธฐ
    useEffect(() => {
        const { scrollbar } = ref.current
        scrollbar.setPosition(0, 0)
    },[pathname])

    return (
        <div>
            {/* damping ๊ฐ์ด ๋ฎ์์๋ก ์คํฌ๋กค์ด ๋ถ๋๋ฌ์์ง */}
            <ScrollBar ref={ref} damping=".09"> 
            {/* ScrollBar๋ก ๊ฐ์ธ์ง ๋ชจ๋  ์ปดํฌ๋ํธ์ ์ ์ฉ */}
                {children} 
            </ScrollBar>
        </div>
    );
};

export default SmoothScrollbar;
```
App.js์ ์คํฌ๋กค์ด ์ ์ฉ๋  ์ปดํฌ๋ํธ ๊ฐ์ธ์ฃผ๊ธฐ
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
### ๐ netlify.com ์์ ๋ฐฐํฌํ๊ธฐ
```javascript
yarn build
cd build
npm install netlify-cli -g
cd ..
netlify deploy
```

*์ฐธ๊ณ : https://www.youtube.com/watch?v=esC2k9z7w2U&list=PLRv_Gd5w9e7mO-lGxKkNSWiAlsiZHnQYY&index=1

 

