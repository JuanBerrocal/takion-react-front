
import { generatePath } from "react-router-dom";

interface BaseRoutes {
    home: string;
    login: string;
    listalluser: string;
    post_list:string;
    post_insert: string;
    post_update: string;
    topic_list: string;
    topic_insert: string;
    topic_update: string;
    root: string;
}

export const baseRoutes: BaseRoutes = {
    home: '/home',
    login: '/login',
    listalluser: '/listalluser',
    post_list: '/postlist',
    post_insert: '/postinsert',
    post_update: '/postupdate/:id',
    topic_list: '/topiclist',
    topic_insert: '/topicinsert',
    topic_update: '/topicupdate/:id',
    root: '/'
};


/*export const linkRoutes: LinkRoutes = {
    ...baseRoutes,
}*/


interface LinkRoutes extends Omit<BaseRoutes, "topic_update" | "post_update"> {
    topic_update: (id: string) => string;
    post_update: (id: string) => string;
  }
  
  export const linkRoutes: LinkRoutes = {
    ...baseRoutes,
    topic_update: (id) => generatePath(baseRoutes.topic_update, { id }),
    post_update: (id) => generatePath(baseRoutes.post_update, { id }),
  };