import s from './Post.module.css';

const Post = (props) => {
  return (
    <div>
      <div className={s.item}>
        <img src='https://w-dog.ru/wallpapers/6/1/464217912085663/kot-ochki-portret.jpg' />
        <div>{props.message}</div>
        <div>
          <span>like {props.likeCount}</span>
        </div>
      </div>
    </div>
  );
};
export default Post;
