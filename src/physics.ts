export type Vec2 = [number, number]
export type RigidBody = {
  initPos: Vec2
  velocity: Vec2,
  acceleration: Vec2
}

export const calcPos = (body: RigidBody, frame: number): Vec2 => {
  const [x, y] = body.initPos
  const [vx, vy] = body.velocity
  const [ax, ay] = body.acceleration

  return [
    x + vx * frame + 0.5 * ax * frame ** 2,
    y + vy * frame + 0.5 * ay * frame ** 2
  ]
}
