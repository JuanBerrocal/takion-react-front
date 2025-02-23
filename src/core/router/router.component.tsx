import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import {HomeScene} from "@/scenes/home.scene";
import {UserListScene} from "@/scenes/user-list.scene";
import {TopicListScene} from "@/scenes/topic.list.scene";
import {TopicDetailScene} from "@/scenes/topic.detail.scene";
import {PostListScene} from "@/scenes/post.list.scene";
import {PostDetailScene} from "@/scenes/post.detail.scene";
import {LoginScene} from "@/scenes/login.scene";
import {baseRoutes, linkRoutes} from './routes'

export const RouterComponent: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path={baseRoutes.home} element = {<HomeScene />} />
                <Route path={baseRoutes.listalluser} element = {<UserListScene />} />
                <Route path={baseRoutes.post_list} element = {<PostListScene />} />
                <Route path={baseRoutes.post_insert} element = {<PostDetailScene isNewPost = {true}/>} />
                <Route path={baseRoutes.post_update} element = {<PostDetailScene isNewPost = {false}/>} />
                <Route path={baseRoutes.topic_list} element = {<TopicListScene />} />
                <Route path={baseRoutes.topic_insert} element = {<TopicDetailScene isNewTopic = {true}/>} />
                <Route path={baseRoutes.topic_update} element = {<TopicDetailScene isNewTopic = {false}/>} />
                <Route path={baseRoutes.login} element = {<LoginScene />} />
                <Route path={baseRoutes.root} element = { <Navigate to={baseRoutes.login} />} />
            </Routes>
        </Router>
    );
}