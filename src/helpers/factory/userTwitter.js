// eslint-disable-next-line import/no-extraneous-dependencies
import { Factory } from 'rosie';
import Chance from 'chance';

const chance = new Chance();

export default Factory.define('user')
  .attr('id', `${chance.integer({ min: 100, max: 100000 })}`)
  .attr('displayName', chance.name())
  .attr('emails', [{ value: chance.email({ domain: 'example.com' }) }])
  .attr('username', chance.word({ length: 5 }))
  .attr('photos', [{ value: 'image.jpg' }])
  .attr('provider', 'twitter');