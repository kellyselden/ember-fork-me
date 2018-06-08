import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | fork me', function(hooks) {
  setupRenderingTest(hooks);

  test('url can be positional param', async function(assert) {
    await render(hbs`{{fork-me "test-url"}}`);

    assert.equal(find('.github-fork-ribbon').getAttribute('href'), 'test-url');
  });

  test('can override title', async function(assert) {
    await render(hbs`{{fork-me title="dont fork me please"}}`);

    assert.equal(find('.github-fork-ribbon').getAttribute('title'), 'dont fork me please');
    assert.equal(find('.github-fork-ribbon').textContent.trim(), 'dont fork me please');
  });
});
