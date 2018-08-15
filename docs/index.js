import React from 'react'
import Icon, { glyphNames } from '../index.js'

export default () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(48px, 1fr))',
      gridGap: 24,
      padding: 32,
      maxWidth: 1024,
      margin: 'auto',
      fontFamily: 'system-ui',
      fontSize: 12,
      textAlign: 'center',
      wordBreak: 'break-word',
      wordWrap: 'wrap'
    }}
  >
    <title>spectrum-icons</title>
    {glyphNames.map(key => (
      <div key={key}>
        <Icon glyph={key} title={key} size={48} />
        <p style={{ color: '#666' }} children={key} />
      </div>
    ))}
  </div>
)
