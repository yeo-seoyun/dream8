import {
  ChatList,
  ChatScreen,
  Donation,
  Exchange,
  ExchangeDetails,
  Home,
  SignIn,
  SignUp,
  MyPage,
  MypageUserSetting,
  Product,
  Payment,
  ProductDetails,
  News,
} from '@/pages';

// 내비게이션 구성(navigation configuration)
const navigationItems = [
  {
    id: 'home',
    index: true,
    path: '',
    text: '홈',
    element: <Home />,
    // lazy: () => import('../pages/Home/Home'),
  },
  {
    id: 'news',
    index: false,
    path: '/News',
    text: '뉴스',
    element: <News />,
    // lazy: () => import('../pages/Home/Home'),
  },
  {
    id: 'SignIn',
    index: false,
    path: '/SignIn',
    text: '로그인 페이지',
    element: <SignIn />,
    // lazy: () => import('../pages/Home/Home'),
  },
  {
    id: 'SignUp',
    index: false,
    path: '/SignUp',
    text: '회원가입 페이지',
    element: <SignUp />,
    // lazy: () => import('../pages/Home/Home'),
  },
  {
    id: 'MyPage',
    index: false,
    path: '/MyPage',
    text: '마이페이지',
    element: <MyPage />,
    // lazy: () => import('../pages/Home/Home'),
  },
  {
    id: 'MypageUserSetting',
    index: false,
    path: '/MypageUserSetting',
    text: '마이페이지',
    element: <MypageUserSetting />,
    // lazy: () => import('../pages/Home/Home'),
  },
  {
    id: 'Product',
    index: false,
    path: '/Product',
    text: '판매 메인페이지',
    element: <Product />,
    // lazy: () => import('../pages/Home/Home'),
  },
  {
    id: 'ProductDetails',
    index: false,
    path: '/ProductDetails',
    text: '판매 상세페이지',
    element: <ProductDetails />,
    // lazy: () => import('../pages/Home/Home'),
  },
  {
    id: 'Payment',
    index: false,
    path: '/Payment',
    text: '판매 작성페이지',
    element: <Payment />,
    // lazy: () => import('../pages/Home/Home'),
  },
  {
    id: 'Exchange',
    index: false,
    path: '/Exchange',
    text: '교환페이지',
    element: <Exchange />,
    // lazy: () => import('../pages/Home/Home'),
  },
  {
    id: 'ExchangeDetails',
    index: false,
    path: '/ExchangeDetails',
    text: '교환 상세페이지',
    element: <ExchangeDetails />,
    // lazy: () => import('../pages/Home/Home'),
  },
  {
    id: 'Donation',
    index: false,
    path: '/Donation',
    text: '기부페이지',
    element: <Donation />,
    // lazy: () => import('../pages/Home/Home'),
  },
  {
    id: 'ChatScreen',
    index: false,
    path: '/ChatScreen',
    text: '채팅페이지',
    element: <ChatScreen />,
    // lazy: () => import('../pages/Home/Home'),
  },
  {
    id: 'ChatList',
    index: false,
    path: '/ChatList',
    text: '채팅리스트 페이지',
    element: <ChatList />,
    // lazy: () => import('../pages/Home/Home'),
  },
];

export default navigationItems;
