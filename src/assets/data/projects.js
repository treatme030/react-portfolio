import { v4 as uuidv4 } from 'uuid';
import JejuImg from '../images/jeju.png';
import GongjangWebImg from '../images/gongjangWeb.png';
import CovidImg from '../images/covid19.png';
import NaverWebImg from '../images/naverWeb.png';
import SamImg from '../images/sam.png';

const projects = [
  {
    id: uuidv4(),
    name: '공.장 Web',
    desc:
      '버리기엔 아깝지만 처분하기에는 어렵고, 혼자 즐기기엔 아쉬워서 공유하고 싶은 퍼즐, 보드게임, 레고 등의 중고 장난감을 나누는 공유 플랫폼',
    img: GongjangWebImg,
    href: ''
  },
  {
    id: uuidv4(),
    name: 'Covid-19 & sweeter(clone)',
    desc:
      '공공데이터 API를 사용하여 코로나 현황 표시, kakao API를 사용하여 인기동영상 검색, firebase를 사용한 twitter clone한 switter',
    img: CovidImg,
    href: 'https://github.com/treatme030/switter'
  },
  {
    id: uuidv4(),
    name: 'Naver Coporation(clone)',
    desc:
      'Naver Coporation 사이트 따라 만들어보기',
    img: NaverWebImg,
    href: 'https://github.com/treatme030/Never-c'
  },
  {
    id: uuidv4(),
    name: "삼성 디자인(clone)",
    desc:
      '삼성 디자인 사이트 따라 만들어보기',
    img: SamImg,
    href: ''
  },
  {
    id: uuidv4(),
    name: 'Jeju Beer(clone)',
    desc:
      '제주 비어 사이트 따라 만들어보기',
    img: JejuImg,
    href: 'https://github.com/treatme030/jeju-beer'
  },
];

export default projects;
