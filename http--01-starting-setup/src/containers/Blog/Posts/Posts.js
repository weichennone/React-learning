import React, {Component} from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import {Link, Route} from 'react-router-dom';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
    state = {
        posts: [],
    }

    componentDidMount () {
        console.log(this.props);
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                // this.setState({posts: response.data});
                this.setState({posts: updatedPosts});
                // console.log(response)
            }).catch(error => {
                console.log(error)
                // this.setState({error: true});
            });
    }

    postSelectedHandler = (id) => {
        // this.setState({selectedPostId: id});
        this.props.history.push({pathname: '/' + id});
    }

    render () {
        let posts = this.state.posts.map(post => {
            return (
                // <Link to={'/'+post.id} key={post.id} >
                //     <Post 
                //     title={post.title} 
                //     author={post.author}
                //     clicked={() => this.postSelectedHandler(post.id)}/>
                // </Link>
                <Post 
                    key={post.id}
                    title={post.title} 
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)}/>
            );
        });
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path='/:id' exact component={FullPost} />
            </div>
            
        );
    }
}

export default Posts;