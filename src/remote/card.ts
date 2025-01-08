import {
  collection,
  getDocs,
  QuerySnapshot,
  query,
  limit,
  startAfter,
} from 'firebase/firestore'

import { store } from './firebase'

import { COLLECTIONS } from '@/constants/constants'
import { Card } from '@models/card'

// pageParam 지금 보이고있는 맨 마지막 요소
export async function getCards(pageParam?: QuerySnapshot<Card>) {
  const cardQuery =
    pageParam == null // 커서 여부
      ? query(collection(store, COLLECTIONS.CARD), limit(10)) // 첫 번째 호출 이라면?
      : query(
          collection(store, COLLECTIONS.CARD),
          startAfter(pageParam),
          limit(10),
        ) // 첫 호출이 아니라면 마지막 요소에 커서

  const cardSnapshot = await getDocs(cardQuery)

  // 지금 부러온 스냅샷의 맨마지막 문서 (커서)
  const lastVisible = cardSnapshot.docs[cardSnapshot.docs.length - 1]

  const items = cardSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Card),
  }))

  return { items, lastVisible }
}
