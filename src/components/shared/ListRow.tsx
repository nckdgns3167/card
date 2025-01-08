import React from 'react'
import Flex from '@shared/Flex'
import Text from '@shared/Text'
import { css } from '@emotion/react'

interface ListRowProps {
  left?: React.ReactNode
  contents: React.ReactNode
  right?: React.ReactNode
  withArrow?: boolean
  onClick?: () => void
}

const ListRow = ({
  left,
  contents,
  right,
  withArrow,
  onClick,
}: ListRowProps) => {
  return (
    <Flex as="li" css={listRowContainerStyle} onClick={onClick}>
      <Flex css={listRowLeftStyle}>{left}</Flex>
      <Flex css={listRowContentsStyle}>{contents}</Flex>
      <Flex>{right}</Flex>
      {withArrow && <IconArrowRight />}
    </Flex>
  )
}

const listRowContainerStyle = css`
  padding: 8px 24px;
  align-items: center;
`

const listRowLeftStyle = css`
  margin-right: 14px;
`

const listRowContentsStyle = css`
  flex: 1;
`

const ListRowText = ({
  title,
  subTitle,
}: {
  title: string
  subTitle: string
}) => {
  return (
    <Flex direction="column">
      <Text bold>{title}</Text>
      <Text typography="t7">{subTitle}</Text>
    </Flex>
  )
}

const IconArrowRight = () => {
  return (
    <svg
      className="feather feather-chevron-right"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}

ListRow.Texts = ListRowText

export default ListRow
