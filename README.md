## Next, SWR, TypeScript Application

Setup

```bash
npx create-next-app next-swr-app --typescript
cd next-swr-app # navigate into the project directory
yarn add swr # install swr
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

### useSWR

- TypeScript-friendly
- SWR will also infer the argument types of `fetcher` from `key`

```bash
import useSWR from 'swr'
const { data } = useSWR('https://www.some-link.com', (apiURL: string) => fetch(apiURL).then(res => res.json())
```
