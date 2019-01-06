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
import UserProfile from "views/DashGiangVien/UserProfile/UserProfile.jsx";
import DanhSachSinhVien from "../views/DashGiangVien/QuanLySinhVien/DanhSachSinhVien.jsx";
import UserProfile from "views/DashGiangVien/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import Auth from "../views/Auth/Auth.jsx";
import QuanLyTienDo from "../views/QuanLyTienDo/QuanLyTienDo.jsx";
import DanhSachDoAn from "views/DashGiangVien/QuanLyDoAn/DanhSachDoAn.jsx";
import DanhSachDoAnMau from "../views/DashGiangVien/QuanLyDoAn/DanhSachDoAnMau.jsx";
import ShowSinhVien from "../views/DashGiangVien/QuanLySinhVien/ShowSinhVien/ShowSinhVien.jsx";
import ShowDoAn from "../views/DashGiangVien/QuanLySinhVien/ShowDoAn.jsx";
import ShowBaoCao from "../views/DashGiangVien/QuanLySinhVien/ShowBaoCao.jsx";


const dashboardRoutes = [
  {
    path: "/giangvien/tongquan",
    sidebarName: "Tổng quan",
    navbarName: "TỔNG QUAN",
    icon: Dashboard,
    component: DashboardPage
  },
   {
     path: "/giangvien/user",
     sidebarName: "User Profile",
     navbarName: "Profile",
     icon: Person,
     component: UserProfile
   },
  {
    slash: true,
  },
  {
    path: "/giangvien/quanlysinhvien/:id/baocao/:id",
    sidebarName: "Báo Cáo",
    navbarName: "Báo Cáo",
    icon: "content_paste",
    hide: true,
    component: ShowBaoCao
  }
  ,
  {
    path: "/giangvien/quanlysinhvien/:id/baocao",
    sidebarName: "Đồ Án",
    navbarName: "Đồ Án",
    icon: "content_paste",
    hide: true,
    component: ShowDoAn
  },
  {
    path: "/giangvien/quanlysinhvien/:id",
    sidebarName: "Quản lí sinh viên",
    navbarName: "Quản lí sinh viên",
    icon: "content_paste",
    hide: true,
    component: ShowSinhVien
  },
  {
    path: "/giangvien/quanlysinhvien",
    sidebarName: "Quản lí sinh viên",
    navbarName: "Quản lí sinh viên",
    icon: "content_paste",
    component: DanhSachSinhVien
  },
  {
    path: "/giangvien/quanlydoan",
    sidebarName: "Quản lý đồ án",
    navbarName: "Quản lý đồ án",
    icon: "content_paste",
    childLink: [
      {
        path: "/giangvien/doan",
        sidebarName: "Quản lý đồ án",
        navbarName: "Quản lý đồ án",
        icon: LibraryBooks,
        component: DanhSachDoAn
      },
      {
        path: "/giangvien/danhsachdoanmau",
        sidebarName: "Danh sách đồ án mẫu",
        navbarName: "Danh sách đồ án mẫu",
        icon: BubbleChart,
        component: DanhSachDoAnMau
      },
    ]
  },

  {
    path: "/giangvien/maps",
    sidebarName: "Maps",
    navbarName: "Map",
    icon: LocationOn,
    component: Maps
  },
  {
    path: "/giangvien/notifications",
    sidebarName: "Notifications",
    navbarName: "Notifications",
    icon: Notifications,
    component: NotificationsPage
  },
  {
    path: "/giangvien/login",
    sidebarName: "Login",
    navbarName: "Login plz",
    icon: Notifications,
    component: Auth,
  },
  { redirect: true, path: "/", to: "/giangvien/tongquan", navbarName: "Redirect" }
];

export default dashboardRoutes;
