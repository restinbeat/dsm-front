import { Divider } from "antd";
import { Home, Monitor, Package2 } from "lucide-react";
import React from "react";
import Menu, { IMenu } from "./nav";

const mainMenuData: IMenu[] = [
  {
    id: "home",
    name: "홈",
    icon: <Home className="w-5 h-5" />,
    link: {
      path: "/",
    },
  },
  {
    id: "product",
    name: "과제 관리",
    icon: <Package2 className="w-5 h-5" />,
    submenu: [
      {
        id: "productList",
        name: "과제 구성 (sample)",
        link: {
          path: "/sample/product/list",
        },
      },
      {
        id: "productList",
        name: "과제 현황",
        link: {
          path: "/sample/product/1",
        },
      },
    ],
  },
  {
    id: "product",
    name: "RUN 관리",
    icon: <Package2 className="w-5 h-5" />,
    submenu: [
      {
        id: "productList",
        name: "RUN 구성",
        link: {
          path: "/sample/product/2",
        },
      },
      {
        id: "productList",
        name: "RUN 실적",
        link: {
          path: "/sample/product/3",
        },
      },
    ],
  },
  {
    id: "product",
    name: "DRC 점검",
    icon: <Package2 className="w-5 h-5" />,
    submenu: [
      {
        id: "productList",
        name: "Design Rule Checker",
        link: {
          path: "/sample/product/4",
        },
      },
    ],
  },
  {
    id: "product",
    name: "설계",
    icon: <Package2 className="w-5 h-5" />,
    submenu: [
      {
        id: "productList",
        name: "설계",
        link: {
          path: "/sample/product/5",
        },
      },
    ],
  },
  {
    id: "product",
    name: "공정 점검",
    icon: <Package2 className="w-5 h-5" />,
    submenu: [
      {
        id: "productList",
        name: "설계치 공정치 비교",
        link: {
          path: "/sample/product/6",
        },
      },
    ],
  },
  {
    id: "product",
    name: "평가 점검",
    icon: <Package2 className="w-5 h-5" />,
    submenu: [
      {
        id: "productList",
        name: "설계치 평가치 비교",
        link: {
          path: "/sample/product/7",
        },
      },
    ],
  },
  {
    id: "product",
    name: "데이터 분석",
    icon: <Package2 className="w-5 h-5" />,
    submenu: [
      {
        id: "productList",
        name: "연계 데이터 분석",
        link: {
          path: "/sample/product/8",
        },
      },
    ],
  },
  {
    id: "product",
    name: "게시판",
    icon: <Package2 className="w-5 h-5" />,
    submenu: [
      {
        id: "productList",
        name: "공지사항",
        link: {
          path: "/sample/product/9",
        },
      },
      {
        id: "productList",
        name: "표준문서 양식",
        link: {
          path: "/sample/product/10",
        },
      },
    ],
  },
  {
    id: "product",
    name: "설정/관리",
    icon: <Package2 className="w-5 h-5" />,
    submenu: [
      {
        id: "productList",
        name: "기준정보 관리",
        link: {
          path: "/sample/product/10",
        },
      },
      {
        id: "productList",
        name: "메뉴 관리",
        link: {
          path: "/sample/product/11",
        },
      },
      {
        id: "productList",
        name: "항목 관리",
        link: {
          path: "/sample/product/12",
        },
      },
      {
        id: "productList",
        name: "표준문서 관리",
        link: {
          path: "/sample/product/13",
        },
      },
      {
        id: "productList",
        name: "공지사항 관리",
        link: {
          path: "/sample/product/14",
        },
      },
      {
        id: "productList",
        name: "설계표 관리",
        link: {
          path: "/sample/product/15",
        },
      },
      {
        id: "productList",
        name: "비교항목 관리",
        link: {
          path: "/sample/product/16",
        },
      },
      {
        id: "productList",
        name: "설계표 이력추적",
        link: {
          path: "/sample/product/17",
        },
      },
    ],
  },
];

const devMenuData: IMenu[] = [
  {
    id: "dev",
    name: "사용 가이드",
    icon: <Monitor className="w-5 h-5" />,
    submenu: [
      {
        name: "폼",
        link: {
          path: "/sample/form",
        },
      },
    ],
  },
];

const MainMenu = () => {
  return (
    <>
      <>
        <Divider orientation="left" plain>
          메인
        </Divider>

        <Menu data={mainMenuData} />
      </>
      <>
        <Divider orientation="left" plain>
          개발
        </Divider>

        <Menu data={devMenuData} />
      </>
    </>
  );
};

export default React.memo(MainMenu);
