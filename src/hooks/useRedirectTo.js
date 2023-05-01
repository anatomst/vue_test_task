import { useRouter } from 'vue-router';

export function useRedirectTo() {
  const router = useRouter();

  const redirectTo = (page) => {
    router.push({ name: page });
  };

  return {
    redirectTo,
  };
}
