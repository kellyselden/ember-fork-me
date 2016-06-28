import Ember from 'ember';
import layout from '../templates/components/fork-me';

const {
  Component
} = Ember;

const MyComponent = Component.extend({
  layout,

  cssUrlBase: 'https://cdnjs.cloudflare.com/ajax/libs/github-fork-ribbon-css/0.2.0',
  title: 'Fork me on GitHub'
});

MyComponent.reopenClass({
  positionalParams: ['url']
});

export default MyComponent;
