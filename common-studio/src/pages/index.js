import React from "react"
import { WebGL } from '../components';

export default function Home() {
  return (
    <div style={{height: '100vh'}}>
      <WebGL.Stage>
        <WebGL.Box/>
      </WebGL.Stage>
    </div>
  )
}
