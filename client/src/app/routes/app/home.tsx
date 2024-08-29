// import { Post } from "../../../components/ui/post";
import { Comment, CommentBox } from "../../../components/ui/comment";
import { PostExpanded } from "../../../components/ui/post/postExpanded";

export const Home = () => {
  return (
    <div className="flex flex-col ">
      <PostExpanded />
      <Comment />
      <CommentBox />
    </div>
  );
};
