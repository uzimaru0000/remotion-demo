import styled from 'styled-components'
import { CssUnit } from '../types'

export type Props = {
  radius: CssUnit
  fillColor?: Color
  strokeColor?: Color
  x?: CssUnit
  y?: CssUnit
  rotate?: number
}

export const Circle: React.FC<Props> = (props) => <View {...props} />

const View = styled.div<Props>`
  position: relative;
  top: ${x => x.y || 0};
  left: ${x => x.x || 0};
  width: ${x => x.radius};
  height: ${x => x.radius};
  background: ${x => x.fillColor || 'transparent'};
  border-width: 16px;
  border-style: solid;
  border-color: ${x => x.strokeColor || 'transparent'};
  border-radius: 50%;
  transform: ${x => `rotate(${x.rotate}deg)`}
`
