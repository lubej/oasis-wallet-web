import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Box } from 'grommet/es6/components/Box'
import { Text } from 'grommet/es6/components/Text'
import { LineChart } from 'grommet-icons/es6/icons/LineChart'
import { Inherit } from 'grommet-icons/es6/icons/Inherit'
import { Money } from 'grommet-icons/es6/icons/Money'
import { CreditCard } from 'grommet-icons/es6/icons/CreditCard'
import styled from 'styled-components'
import { normalizeColor } from 'grommet/es6/utils'
import { NavLink, useLocation } from 'react-router-dom'
import { selectAddress } from 'app/state/wallet/selectors'
import { useParaTimesNavigation } from 'app/pages/ParaTimesPage/useParaTimesNavigation'
import { IS_FIAT_ONRAMP_ENABLED } from '../../pages/FiatOnrampPage/isEnabled'
import { mobileFooterNavigationHeight } from '../../../styles/theme/elementSizes'
// eslint-disable-next-line no-restricted-imports
import type { Icon } from 'grommet-icons/es6/icons'

const StyledMobileFooterNavigation = styled.nav`
  background-color: ${({ theme }) => normalizeColor('background-front', theme)};
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${mobileFooterNavigationHeight};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: ${({ theme }) =>
    `0px 0px ${theme.global?.borderSize?.xsmall} ${normalizeColor('background-front-border', theme)}`};
  border-top: ${({ theme }) =>
    `solid ${theme.global?.borderSize?.xsmall} ${normalizeColor('background-contrast', theme)}`};
  flex-direction: row;
`

export interface MobileFooterNavigationProps {
  walletHasAccounts: boolean
  isMobile: boolean
}

export const MobileFooterNavigation = ({ walletHasAccounts, isMobile }: MobileFooterNavigationProps) => {
  const { t } = useTranslation()
  const address = useSelector(selectAddress)
  const { getParaTimesRoutePath, paraTimesRouteLabel } = useParaTimesNavigation()
  const getMenuItems = useMemo(() => {
    const menuItems = [
      {
        label: t('menu.wallet', 'ROSE Wallet'),
        Icon: Money,
        to: `/account/${address}`,
      },
      {
        label: t('menu.stake-mobile', 'Stake'),
        Icon: LineChart,
        to: `/account/${address}/stake`,
      },
      {
        label: paraTimesRouteLabel,
        Icon: Inherit,
        to: getParaTimesRoutePath(address!),
      },
      ...(IS_FIAT_ONRAMP_ENABLED
        ? [
            {
              label: t('menu.fiatOnramp-mobile', 'Buy'),
              Icon: CreditCard,
              to: `/account/${address}/fiat`,
            },
          ]
        : []),
    ]
    return menuItems
  }, [address, getParaTimesRoutePath, paraTimesRouteLabel, t])

  if (!isMobile || !walletHasAccounts) {
    return null
  }

  return (
    <StyledMobileFooterNavigation data-testid="mobile-footer-navigation">
      {getMenuItems.map(({ label, Icon, to }) => (
        <MobileFooterButton key={to} label={label} Icon={Icon} to={to} />
      ))}
    </StyledMobileFooterNavigation>
  )
}

function MobileFooterButton({ label, Icon, to }: { label: string; Icon: Icon; to: string }) {
  return (
    <NavLink to={to}>
      <Box as="span" justify="center" align="center" pad={{ horizontal: 'medium' }}>
        <Box as="span" margin="xsmall">
          <Icon />
        </Box>
        <Text size="small" textAlign="center">
          {label}
        </Text>
      </Box>
    </NavLink>
  )
}
