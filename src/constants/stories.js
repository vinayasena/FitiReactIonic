import async from './async';

const stories = async('stories');
const story = async('story');

export default {
  BROWSE: {
    ...stories('browse'),
    RESET: 'STORIES_BROWSE_RESET',
  },
  READ: story('read'),
  DELETE: story('delete'),
};
