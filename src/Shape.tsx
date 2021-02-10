import React from 'react'
import { Sequence, useCurrentFrame, useVideoConfig, AbsoluteFill, interpolate } from 'remotion'
import { calcPos, RigidBody, Vec2 } from './physics'
import { Circle } from './Shape/Circle'
import { Rect } from './Shape/Rect'
import { Icon } from './Shape/Icon'

type EffectObject = {
	component: (pos: Vec2, frame: number) => React.ReactElement,
	rigidbody: RigidBody
}

const gravityConst = 7

const initSpeed = 70

const rect = (key: string, amount: number) => ([x, y]: Vec2, frame: number) => (
	<Rect
		key={key}
		x={`${x - 50}px` as const}
		y={`${y - 50}px` as const}
		strokeColor="#199861"
		width="100px"
		height="100px"
		rotate={frame * amount}
	/>
)

const circle = (key: string, amount: number) => ([x, y]: Vec2, frame: number) => (
	<Circle
		key={key}
		radius="100px"
		strokeColor="#199861"
		x={`${x - 50}px` as const}
		y={`${y - 50}px` as const}
		rotate={frame * amount}
			/>
		)

const objects: EffectObject[] = [
	{
		component: rect('rect1', 10),
		rigidbody: {
			initPos: [Math.cos(Math.PI / 4) * 80, Math.sin(Math.PI / 4) * 100],
			velocity: [Math.cos(Math.PI / 4) * initSpeed, Math.sin(Math.PI / 4) * initSpeed],
			acceleration: [0, gravityConst]
		}
	},
	{
		component: circle('circle1', 0),
		rigidbody: {
			initPos: [Math.cos(3 * Math.PI / 4) * 100, Math.sin(3 * Math.PI / 4) * 90],
			velocity: [Math.cos(3 * Math.PI / 4) * initSpeed, Math.sin(3 * Math.PI / 4) * initSpeed],
			acceleration: [0, gravityConst]
		}
	},
	{
		component: rect('rect2', -10),
		rigidbody: {
			initPos: [Math.cos(5 * Math.PI / 4) * 70, Math.sin(5 * Math.PI / 4) * 110],
			velocity: [Math.cos(5 * Math.PI / 4) * initSpeed, Math.sin(5 * Math.PI / 4) * initSpeed],
			acceleration: [0, gravityConst]
		}
	},
	{
		component: circle('circle2', 0),
		rigidbody: {
			initPos: [Math.cos(7 * Math.PI / 4) * 110, Math.sin(7 * Math.PI / 4) * 120],
			velocity: [Math.cos(7 * Math.PI / 4) * initSpeed, Math.sin(7 * Math.PI / 4) * initSpeed],
			acceleration: [0, gravityConst]
		}
	},
]

export const Shape: React.FC = () => {
  const config = useVideoConfig()
  const frame = useCurrentFrame()

  const duration = config.durationInFrames / 4

  const radius = interpolate(
    frame,
    [0, duration],
    [config.height * 0.5, 0],
    {
      easing: x => Math.pow(2, -(1-x) * 10)
    }
  )

  return (
	<AbsoluteFill style={{ backgroundColor: 'white' }}>
		<Sequence from={0} durationInFrames={duration}>
			<AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
				<Circle radius={`${radius}px` as const} fillColor="#199861" />
			</AbsoluteFill>
		</Sequence>
		{
			objects
				.map(x => ({...x, pos: calcPos(x.rigidbody, frame - duration)}))
				.map(x => x.component([x.pos[0] + config.width / 2, x.pos[1] + config.height / 2], frame - duration))
				.map(x => <Sequence key={x.key} from={duration + 1} durationInFrames={duration}>{x}</Sequence>)
		}
		<Sequence from={duration + 1} durationInFrames={duration * 3}>
			<AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
				<Icon width={`${config.height * 0.25}px` as const} />
			</AbsoluteFill>
		</Sequence>
	</AbsoluteFill>
  )
}
