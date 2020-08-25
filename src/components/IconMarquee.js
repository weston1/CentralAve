import React from 'react'
import Marquee, { Motion, randomIntFromInterval } from 'react-marquee-slider'
import times from 'lodash/times'
import { Star } from 'react-feather'

export const IconMarquee = () => {
  return (
    <div style={{ height: '500px' }}>
      <Marquee
        velocity={12}
        minScale={0.7}
        resetAfterTries={200}
        scatterRandomly
      >
        {times(5, Number).map(id => (
          <Motion
            key={`child-${id}`}
            initDeg={randomIntFromInterval(0, 360)}
            direction={Math.random() > 0.5 ? 'clockwise' : 'counterclockwise'}
            velocity={10}
            radius={50}
          >
            <div
              style={{
                width: '75px',
                height: '75px',
                borderRadius: '50%',
                color: 'white',
                backgroundColor: 'var(--secondary)',
                textAlign: 'center',
                lineHeight: '90px',
                boxShadow: '5px 5px 10px #888888'
              }}
            >
              <Star />
            </div>
          </Motion>
        ))}
      </Marquee>
    </div>
  )
}
