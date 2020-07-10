import PropTypes from 'prop-types';
import { Spin, List } from 'antd';
import Router from 'next/router';
import { handleDescContent, utc2beijing } from '../../core/util';
import { color_primary } from '../../constants/CustomTheme';

const PostList = ({ list: postList }) => {
  const handleClick = (e, href) => {
    e.preventDefault();
    Router.push(`/post/[number]`, href);
  };

  return (
    <div className="container">
      <Spin spinning={postList.length === 0}>
        <List>
          {postList.map(item => {
            const { number, title, body, updated_at } = item;
            return (
              <a
                key={number}
                href={`/post/${number}`}
                onClick={e => handleClick(e, `/post/${number}`)}
              >
                <List.Item>
                  <List.Item.Meta
                    title={<span className="title">{title}</span>}
                    description={utc2beijing(updated_at)}
                  />
                  <p className="description">{handleDescContent(body)}</p>
                </List.Item>
              </a>
            );
          })}
        </List>
      </Spin>
      <style jsx>{`
        :global(.container .ant-list-item) {
          flex-direction: column;
          align-items: flex-start;
          padding: 0;
          margin: 12px 0;
        }

        .title {
          color: ${color_primary};
          font-size: 16px;
        }

        .description {
          color: rgba(0, 0, 0, 0.65);
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
          text-overflow: ellipsis;
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default PostList;

PostList.propTypes = {
  list: PropTypes.array.isRequired,
};
