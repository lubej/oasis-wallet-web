/**
 *
 * ValidatorMediaInfo
 *
 */
import { ValidatorMediaInfo as MediaInfo } from 'app/state/staking/types'
import { Box } from 'grommet/es6/components/Box'
import { Button } from 'grommet/es6/components/Button'
import { ResponsiveContext } from 'grommet/es6/contexts/ResponsiveContext'
import { Home } from 'grommet-icons/es6/icons/Home'
import { MailOption } from 'grommet-icons/es6/icons/MailOption'
import { Twitter } from 'grommet-icons/es6/icons/Twitter'
import React, { memo, useContext } from 'react'
import { isWebUri } from 'valid-url'

interface Props {
  mediaInfo: MediaInfo
}

export const ValidatorMediaInfo = memo((props: Props) => {
  const info = props.mediaInfo
  const size = useContext(ResponsiveContext)
  return (
    <>
      <Box direction="row" gap={size !== 'small' ? 'medium' : 'none'}>
        <Box direction="row" gap="none">
          {info.email_address && !info.email_address.includes('?') && (
            <MediaButton href={`mailto:${info.email_address}`} icon={<MailOption size="20px" />} />
          )}
          {info.website_link && isWebUri(info.website_link) && (
            <MediaButton href={info.website_link} icon={<Home size="20px" />} />
          )}
          {info.twitter_acc && isWebUri(info.twitter_acc) && (
            <MediaButton href={info.twitter_acc} icon={<Twitter size="20px" />} />
          )}
        </Box>
      </Box>
    </>
  )
})

interface MediaButtonProps {
  icon: JSX.Element
  href: string
}
const MediaButton = memo((props: MediaButtonProps) => (
  <Button href={props.href} icon={props.icon} hoverIndicator size="small" target="_blank" rel="noopener" />
))
