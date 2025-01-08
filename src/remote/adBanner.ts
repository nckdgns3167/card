import { collection, getDocs } from 'firebase/firestore'

import { store } from './firebase'

import { COLLECTIONS } from '@/constants/constants'
import { AdBanner } from '@models/adBanner'

export async function getAdBanners() {
  const adBannerSnapshot = await getDocs(
    collection(store, COLLECTIONS.AD_BANNER),
  )

  return adBannerSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as AdBanner),
  }))
}
