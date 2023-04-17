import { Menu } from "../interface/menu.interface";

export const MENU: Menu[] = [
  {
      id:1,
      title:"Home",
      icon:"company",
      router: "/home"
  },
  {
      id:2,
      title:"Jobs",
      icon:"jobs",
      router: "/this/route/dosent/exist"
  },
  {
      id:3,
      title:"people",
      icon:"person",
      router: "/people/list"
  }
]
