// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import Auth from "../views/Auth/Auth.jsx";
import QuanLyTienDo from "../views/QuanLyTienDo/QuanLyTienDo.jsx";
import DanhSachKhoa from "views/DanhSachKhoa/DanhSachKhoa.jsx";
import ShowKhoa from "views/DanhSachKhoa/show/ShowKhoa.jsx";
import DanhSachLop from "../views/DanhSachLop/DanhSachLop.jsx";
import ShowLop from "../views/DanhSachLop/show/ShowLop.jsx";

const dashboardRoutes = [
  {
    path: "/tongquan",
    sidebarName: "Tổng quan",
    navbarName: "TỔNG QUAN",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/user",
    sidebarName: "User Profile",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile
  },
  {
    slash: true,
  },

  {
    path: "/quanlychung/dskhoa/:id",
    sidebarName: "Khoa",
    navbarName: "Khoa",
    icon: "content_paste",
    hide: true,
    component: ShowKhoa
  },// de truoc dskhoa
  {
    path: "/quanlychung/dslop/:id",
    sidebarName: "Lớp",
    navbarName: "Lớp",
    icon: "content_paste",
    hide: true,
    component: ShowLop
  },
  {
    path: "/quanlychung",
    sidebarName: "Quản lý chung",
    navbarName: "Table List",
    icon: "content_paste",
    childLink: [
      {
        path: "/quanlychung/dskhoa",
        sidebarName: "Khoa",
        navbarName: "Khoa",
        icon: "content_paste",
        component: DanhSachKhoa
      },
      {
        path: "/quanlychung/dslop",
        sidebarName: "Lớp",
        navbarName: "Lớp",
        icon: "content_paste",
        component: DanhSachLop
      },
      {
        path: "/quanlychung/dsgv",
        sidebarName: "Giảng viên",
        navbarName: "Giảng viên",
        icon: "content_paste",
        component: TableList
      },
      {
        path: "/quanlychung/dssv",
        sidebarName: "Sinh viên",
        navbarName: "Sinh viên",
        icon: "content_paste",
        component: TableList
      },
    ]
  },
  {
    path: "/tiendo",
    sidebarName: "Quản lý tiến độ",
    navbarName: "Quản lý tiến độ",
    icon: BubbleChart,
    component: QuanLyTienDo
  },
  {
    path: "/doan",
    sidebarName: "Quản lý đồ án",
    navbarName: "Quản lý đồ án",
    icon: LibraryBooks,
    component: Typography
  },
  {
    path: "/maps",
    sidebarName: "Maps",
    navbarName: "Map",
    icon: LocationOn,
    component: Maps
  },
  {
    path: "/notifications",
    sidebarName: "Notifications",
    navbarName: "Notifications",
    icon: Notifications,
    component: NotificationsPage
  },
  {
    path: "/login",
    sidebarName: "Login",
    navbarName: "Login plz",
    icon: Notifications,
    component: Auth,
  },
  { redirect: true, path: "/", to: "/tongquan", navbarName: "Redirect" }
];

export default dashboardRoutes;
