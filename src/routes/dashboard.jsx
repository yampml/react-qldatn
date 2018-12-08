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
import DanhSachKhoa from "views/DanhSachKhoa/DanhSachKhoa.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import Auth from "../views/Auth/Auth.jsx";

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
    path: "/quanlychung",
    sidebarName: "Quản lý chung",
    navbarName: "Table List",
    icon: "content_paste",
    childLink: [
      {
        path: "/quanlychung/dskhoa",
        sidebarName: "Danh sách Khoa",
        navbarName: "Danh sách Khoa",
        icon: "content_paste",
        component: DanhSachKhoa
      },
      {
        path: "/quanlychung/dslop",
        sidebarName: "Danh sách Lớp",
        navbarName: "Danh sách Lớp",
        icon: "content_paste",
        component: TableList
      },
      {
        path: "/quanlychung/dssv",
        sidebarName: "Danh sách Sinh viên",
        navbarName: "Danh sách Sinh viên",
        icon: "content_paste",
        component: TableList
      },
      {
        path: "/quanlychung/dsgv",
        sidebarName: "Danh sách Giảng viên",
        navbarName: "Danh sách Giảng viên",
        icon: "content_paste",
        component: TableList
      },
    ]
  },
  {
    path: "/doan",
    sidebarName: "Quản lý đồ án",
    navbarName: "Quản lý đồ án",
    icon: LibraryBooks,
    component: Typography
  },
  {
    path: "/tiendo",
    sidebarName: "Quản lý tiến độ",
    navbarName: "Quản lý tiến độ",
    icon: BubbleChart,
    component: Icons
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
