import { useEffect, useState } from "react";

type IState<T> = Readonly<{
  value?: T;
  error?: Error | unknown;
  isLoading: boolean;
}>;

/* eslint-disable */
export function useApi<T extends (...args: any) => Promise<any>>(
  cb: T,
  deps: any[] = []
) {
  type IDataType = Awaited<ReturnType<typeof cb>>;

  const [value, setValue] = useState<IDataType>();
  // TODO: unknown
  const [error, setError] = useState<Error | unknown>();
  const [isLoading, setLoading] = useState<boolean>(false);

  const getData = async () => {
    try {
      setLoading(true);
      const response = await cb();

      setValue(response);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [...deps]);

  return { value, isLoading, error } as IState<IDataType>;
}
