import './index.css'

type PositionType = '' | 'top' | 'right' | 'left' | 'bottom'

/**
 * @param $elem 增加tooltip的dom元素
 * @param tips tooltip的文案值
 * @param position 默认为空串，显示效果为top */
export function set($elem: HTMLElement, tips: string, position: PositionType = '') {
  $elem.setAttribute('data-tooltip', tips)
  if (position) $elem.setAttribute('data-position', position)
}

/** @param $elem 移除tooltip的dom元素 */
export function remove($elem: HTMLElement) {
  $elem.removeAttribute('data-tooltip')
  $elem.removeAttribute('data-position')
}

export default { set, remove }