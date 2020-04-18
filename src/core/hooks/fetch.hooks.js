export const useFetch = async (fetchEffect, setLoading, setError) => {  
  try {
    setLoading(true);
    setError(null);

    return await fetchEffect().then(res => {
      setLoading(false);
      return res;
    });
  } catch (e) {
    setError({
      errorCode: e.response.status,
      errorMessage: e.message
    });
    setLoading(false);
  }
};
