import styled from 'styled-components'

type Props = {
  text: string;
}

export const Text: React.FC<Props> = (props: Props) => (
	<View>
		{props.text}
	</View>
)

const View = styled.div`
  font-size: 64px;
`
