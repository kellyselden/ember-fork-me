import { visit, find } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | application', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');

    let ribbon = find('.github-fork-ribbon');
    assert.equal(ribbon.getAttribute('href'), 'https://github.com/kellyselden/ember-fork-me');
    assert.equal(ribbon.getAttribute('title'), 'Fork me on GitHub');
    assert.equal(ribbon.textContent.trim(), 'Fork me on GitHub');
  });
});
