import styled from 'styled-components'
import { Color, CssUnit } from '../types'

export type Props = {
  width: CssUnit
  height: CssUnit
  fillColor?: Color
  strokeColor?: Color
  x?: CssUnit
  y?: CssUnit
  rotate?: number
}

export const Rect: React.FC<Props> = (props) => <View {...props} />

const View = styled.div<Props>`
  position: relative;
  top: ${x => x.y};
  left: ${x => x.x};
  width: ${x => x.width};
  height: ${x => x.height};
  background-color: ${x => x.fillColor || 'transparent'};
  border-width: 8px;
  border-style: solid;
  border-color: ${x => x.strokeColor || 'transparent'};
  border-radius: 20%;
  transform: ${x => `rotate(${x.rotate}deg)`}
`
