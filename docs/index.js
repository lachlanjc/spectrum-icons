import React from 'react'
import Icon, { glyphNames } from '../index.js'

export default () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(48px, 1fr))',
      gridGap: 16,
      padding: 32,
      maxWidth: 768,
      margin: 'auto'
    }}
  >
    <title>spectrum-icons</title>
    {glyphNames.map(key => (
      <Icon glyph={key} title={key} size={48} key={key} />
    ))}
  </div>
)
