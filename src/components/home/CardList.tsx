import React, { useCallback } from 'react'
import ListRow from '@shared/ListRow'
import { getCards } from '@remote/card'
import { useInfiniteQuery } from 'react-query'
import { flatten } from 'lodash'
import InfiniteScroll from 'react-infinite-scroll-component'
import Badge from '@shared/Badge'
import { useNavigate } from 'react-router-dom'

const CardList = () => {
  const {
    data,
    hasNextPage = false,
    fetchNextPage,
    isFetching,
  } = useInfiniteQuery(
    ['cards'],
    ({ pageParam }) => {
      // console.log('pageParam', pageParam)
      return getCards(pageParam)
    },
    {
      getNextPageParam: (snapshot) => {
        // console.log('snapshot', snapshot)
        return snapshot.lastVisible // 맨 마지막 아이템을 리턴 -> 다음 페이지 호출할 때 이용 가능.
      },
    },
  )

  const navigate = useNavigate()

  // console.log('data', data)
  // console.log('hasNextPage', hasNextPage)

  const loadMore = useCallback(() => {
    if (!hasNextPage || isFetching) return
    fetchNextPage()
  }, [fetchNextPage, hasNextPage, isFetching])

  if (data == null) {
    return null
  }

  const cards = flatten(data?.pages.map(({ items }) => items))
  return (
    <div>
      <InfiniteScroll
        dataLength={cards.length}
        hasMore={hasNextPage}
        loader={<></>}
        next={loadMore}
        scrollThreshold="100px"
      >
        <ul>
          {cards.map((card, index) => (
            <ListRow
              key={card.id}
              contents={
                <ListRow.Texts title={`${index + 1}위`} subTitle={card.name} />
              }
              right={card.payback && <Badge label={card.payback} />}
              withArrow
              onClick={() => {
                navigate(`/card/${card.id}`)
              }}
            />
          ))}
        </ul>
      </InfiniteScroll>
    </div>
  )
}

export default CardList
