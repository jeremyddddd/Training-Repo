import Post from './Post';
import classes from './PostsList.module.css'; 

function PostsList() {
    return (
        <ul className={classes.posts}>
          <Post author="Maximilian" body="React is great"/>
          <Post author="Manuel" body="React is Good"/>
        </ul>
      );
}

export default PostsList;