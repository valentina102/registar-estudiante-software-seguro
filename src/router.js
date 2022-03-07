import { createWebHistory, createRouter } from "vue-router";
import RegisterPage from "@/components/Register.vue";
import LoginPage from "@/components/Login.vue";
import CreateStudentPage from "@/components/CreateStudent.vue";
import MenuPage from "@/components/Menu.vue";


const routes = [
  {
    path: "/",
    name: "RegisterPage",
    component: RegisterPage,
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/createStudent",
    name: "CreateStudentPage",
    component: CreateStudentPage,
  },
  {
    path: "/menu",
    name: "MenuPage",
    component: MenuPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;