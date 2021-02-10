import icon from '../../Icon.png';
import { Img } from 'remotion'
import { CssUnit } from '../types';

type Props = {
  width: CssUnit
}

export const Icon: React.FC<Props> = (props: Props) => <Img src={icon} style={{ width: props.width }} />
