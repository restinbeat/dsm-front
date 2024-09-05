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
        name: "작성중..",
        link: {
          path: "/sample/product/list",
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
        name: "작성중..",
        link: {
          path: "/sample/product/list",
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
        name: "작성중..",
        link: {
          path: "/sample/product/list",
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
        name: "작성중..",
        link: {
          path: "/sample/product/list",
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
        name: "작성중..",
        link: {
          path: "/sample/product/list",
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
        name: "작성중..",
        link: {
          path: "/sample/product/list",
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
        name: "작성중..",
        link: {
          path: "/sample/product/list",
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
          path: "/sample/product/list",
        },
      },
      {
        id: "productList",
        name: "표준문서 양식",
        link: {
          path: "/sample/product/list",
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
        name: "작성중..",
        link: {
          path: "/sample/product/list",
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
