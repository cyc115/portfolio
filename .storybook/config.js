import { configure } from '@kadira/storybook';

function loadStories() {
  require('../src/stories/resume');
  // require('../src/stories');
  // require('../src/stories/portfolio');
  // require('../src/stories/flipper');

}

configure(loadStories, module);
