import Component from '@ember/component';
import layout from '../templates/components/fork-me';

export default Component.extend({
  layout,

  cssUrlBase: 'https://cdnjs.cloudflare.com/ajax/libs/github-fork-ribbon-css/0.2.0',
  title: 'Fork me on GitHub'
}).reopenClass({
  positionalParams: ['url']
});
