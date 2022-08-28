import React from 'react'
import { Table } from 'evergreen-ui'
import { Box } from 'atomic-layout'
import { HashLink } from 'components/base'
import { useFixedNav, useCurrentPage } from './useFixedNav'
import { theme } from 'theme'

const containerId = 'navContainer'
const navBarId = 'navBar'
const navItems = ['Home', 'About', 'Media', 'Mailing List']

export function Navigation ({ pathname }) {
  useFixedNav(containerId, navBarId)
  useCurrentPage(navItems, theme)
  return (
    <Box
      id={containerId}
      width='100vw'
      height={32}
    >
      <Table.Row
        id={navBarId}
        width='100vw'
        height={32}
        backgroundColor={theme.bone}
      >
        {navItems.map((link) => (
          <Table.TextCell
            key={link.replace(/ /g, '')}
            id={`nav${link}`}
            textProps={{ size: 500 }}
            marginLeft='2em'
            marginRight='2em'
            padding='0'
          >
            <HashLink
              pathname={pathname}
              hash={link === 'Home' ? undefined : link.toLowerCase()}
              id={`link${link}`}
            >
              {link}
            </HashLink>
          </Table.TextCell>
        ))}
      </Table.Row>
    </Box>
  )
}
