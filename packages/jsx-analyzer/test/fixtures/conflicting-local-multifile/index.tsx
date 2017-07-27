/* tslint:disable */
import bar, { states as barStates } from './blocks/bar.block.css';
import { h } from 'preact';
import objstr from 'obj-str';
import Awesome from './components/awesome-component';

let style = objstr({
  [bar]: true,
  [bar.pretty]: true,
  [bar.pretty[barStates.color.yellow]]: false
});

export default function() {
  return (<div class={style}><Awesome></Awesome></div>);
}