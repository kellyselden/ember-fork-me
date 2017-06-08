import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | application');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    let ribbon = find('.github-fork-ribbon');
    assert.equal(ribbon.attr('href'), 'https://github.com/kellyselden/ember-fork-me');
    assert.equal(ribbon.attr('title'), 'Fork me on GitHub');
    assert.equal(ribbon.text(), 'Fork me on GitHub');
  });
});
