import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Formik, Form} from 'formik';
import Stack from '@mui/material/Stack';
import EditIcon from '@mui/icons-material/Edit';

import { PostModel, createEmptyPost } from '@/pods/post-list/api/post.model';
import { readPost } from '@/pods/post-detail/api/post.detail.api';
import {PostValidation} from './../post.detail.validation'
import {TextFieldComponent} from '@/common/textfield/textfield.component';
import { AuthContext } from '@/common/auth/auth.context';
import * as classes from './../post.detail.styles';

interface Props {
    className: string;
    isNewPost: boolean;
    postId: string;
    onWritePost: (isNewPost: boolean, post: PostModel) => void;
}

export const PostDetailForm: React.FC<Props> = (props) => {
    const {className, isNewPost, postId, onWritePost} = props;
    
    const [post, setPost] = React.useState(createEmptyPost());
    const {userSession} = React.useContext(AuthContext);
    
    React.useEffect(() => {loadPost()}, []);

    // Loads the post field values. If its an existing post reads it from the database. If its a new one, just set author field to current user.
    const loadPost = async () =>{
        if (!isNewPost) {
            try {
                
                const postRead = await readPost(postId);
                console.log("DEBUG. El id de postRead es: ", postRead.id);
                setPost(postRead);
            }   
            catch (error) {
                    console.log('Could not read the post. Something went wrong: ' + error);
            }
        }
        else {
            setPost(prev => ({...prev, author: {...userSession}}));
        }
    }


    return (
        ((isNewPost && post.author.email) || (post?.id)) && <Formik
            onSubmit = {async (values: PostModel) => onWritePost(isNewPost, values)}
            initialValues = {post}
            validation = {PostValidation}
        >
            {() => (

                <Form>
                    <Stack direction='column' spacing = {2}>
                        <TextFieldComponent name="title" label="Titulo"/>
                        <TextFieldComponent name="text" label="Texto" multiline rows = {12} maxRows={12}/>
                        <TextFieldComponent name="subject" label="Tema" />
                        <Button 
                            className = {classes.formButton}
                            variant = "contained" 
                            color = 'secondary'
                            type="submit"
                            startIcon={<EditIcon sx={{stroke: "white", strokeWidth: 2}} />}>
                            Grabar
                        </Button>
                    </Stack>
                </Form>
            )}
        </Formik>
    );
}