import React from 'react';

import {PostModel} from '@/pods/post-list/api/post.model';

export interface PostErrors {
    author: string;
    title: string;
    text: string;
    subject: string;
}

export const PostValidation = (values :PostModel)  => {
    let errors: PostErrors = {author: '', title:'', text: '', subject: ''};
   
    
    if (!values.title) {
      errors.title = 'Title is required!';
    }
    if (!values.subject) {
      errors.subject = 'Subject is required!';
    }
    return errors;
   }
   