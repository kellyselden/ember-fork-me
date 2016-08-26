import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fork-me', 'Integration | Component | fork me', {
  integration: true
});

// broken in ember 1.13
// test('uses url link', function(assert) {
//   this.render(hbs`{{fork-me url="test-url"}}`);
//
//   assert.equal(this.$('.github-fork-ribbon').attr('href'), 'test-url');
// });

test('url can be positional param', function(assert) {
  this.render(hbs`{{fork-me "test-url"}}`);

  assert.equal(this.$('.github-fork-ribbon').attr('href'), 'test-url');
});

test('can override title', function(assert) {
  this.render(hbs`{{fork-me title="dont fork me please"}}`);

  assert.equal(this.$('.github-fork-ribbon').attr('title'), 'dont fork me please');
  assert.equal(this.$('.github-fork-ribbon').text().trim(), 'dont fork me please');
});
