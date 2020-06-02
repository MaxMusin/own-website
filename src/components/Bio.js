import React from 'react'

export default ({ settings }) => (
  <div

  >
    <img
      src={settings.author_avatar.imgix_url}
      alt={settings.author_name}
    />
    <div dangerouslySetInnerHTML={{ __html: settings.author_bio }} />
  </div>
)
