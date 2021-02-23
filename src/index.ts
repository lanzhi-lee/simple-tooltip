import './index.css'

type PositionType = '' | 'top' | 'right' | 'left' | 'bottom'

export const ToolTip = {
  /**
   * @param $elem 增加tooltip的dom元素
   * @param tips tooltip的文案值
   * @param position 默认为空串，显示效果为top */
  set($elem: HTMLElement, tips: string, position: PositionType = '') {
    $elem.setAttribute('tooltip', tips)
    if (position) $elem.setAttribute('position', position)
  },

  /** @param $elem 移除tooltip的dom元素 */
  remove($elem: HTMLElement) {
    $elem.removeAttribute('tooltip')
    $elem.removeAttribute('position')
  }
}

export default ToolTip