/**
 *
 * OpenWalletPage
 *
 */
import { Anchor, Box, Button, Heading } from 'grommet'
import * as React from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { Switch } from 'react-router'
import { NavLink, Route } from 'react-router-dom'
import { FromLedger } from './Features/FromLedger'

import { FromMnemonic } from './Features/FromMnemonic'
import { FromPrivateKey } from './Features/FromPrivateKey'

export function SelectOpenMethod() {
  const { t } = useTranslation()

  return (
    <Box
      round="5px"
      border={{ color: 'background-front-border', size: '1px' }}
      background="background-front"
      margin="small"
      pad="medium"
    >
      <Heading level="3">{t('openWallet.header', 'How do you want to open your wallet?')}</Heading>

      <Box direction="row-responsive" justify="start" margin={{ top: 'medium' }} gap="medium">
        <NavLink to="/open-wallet/mnemonic">
          <Button type="submit" label={t('openWallet.method.mnemonic', 'Mnemonic')} primary />
        </NavLink>
        <NavLink to="/open-wallet/private-key">
          <Button type="submit" label={t('openWallet.method.privateKey', 'Private key')} primary />
        </NavLink>
        <NavLink to="/open-wallet/ledger">
          <Button type="submit" label={t('openWallet.method.ledger', 'Ledger')} primary />
        </NavLink>
      </Box>

      <Box
        direction="row-responsive"
        justify="start"
        margin={{ top: 'medium' }}
        gap="medium"
        style={{ whiteSpace: 'pre-wrap', display: 'inline' }}
      >
        <Trans
          i18nKey="openWallet.bitpie.warning"
          t={t}
          defaults="❗ BitPie wallet users: You cannot import the mnemonic phrase directly from your BitPie wallet. <DocsLink>Check documentation for details.</DocsLink>"
          components={{
            DocsLink: <Anchor href="https://docs.oasis.io/general/manage-tokens/faq" />,
          }}
        />
      </Box>
    </Box>
  )
}

interface Props {}
export function OpenWalletPage(props: Props) {
  return (
    <Switch>
      <Route exact path="/open-wallet" component={SelectOpenMethod} />
      <Route exact path="/open-wallet/mnemonic" component={FromMnemonic} />
      <Route exact path="/open-wallet/private-key" component={FromPrivateKey} />
      <Route exact path="/open-wallet/ledger" component={FromLedger} />
    </Switch>
  )
}
