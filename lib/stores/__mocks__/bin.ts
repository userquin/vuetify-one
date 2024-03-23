import type { Bin } from '../../stores/bins'

export const bin: Bin = {
  id: '1',
  content: 'Bin content',
  favorite: false,
  pinned: false,
  owner: {
    id: '1',
    name: 'user',
    email: 'john@vuetifyjs.com',
  },
  visibility: 'public',
}
