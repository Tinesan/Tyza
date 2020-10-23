import { useMemo } from "react";
import { useHistory, useLocation } from "react-router-dom";

const MODAL_NAMES = {
  orderModal: "orderModal",
  basketModal: "backetModal",
} as const;

type TModalName = typeof MODAL_NAMES[keyof typeof MODAL_NAMES];

type SearchParams = { [key: string]: any } | undefined;

const useModal = () => {
  const history = useHistory();

  const { pathname, search } = useLocation();

  const openModal = (modalName: TModalName, searchParams: SearchParams) => {
    const parsedSearchParams = getUrlParams({
      modal: modalName,
      ...searchParams,
    });
    history.push(`${pathname}${parsedSearchParams}`, {
      modal: true,
    });
  };

  const closeModal = () => {
    debugger;
    history.push(pathname, {
      modal: false,
    });
  };

  const modalQueryParams = useMemo(() => {
    if (!search) return {};
    const correactedSearch = search.substring(1);
    const result = JSON.parse(
      '{"' +
        decodeURI(correactedSearch)
          .replace(/"/g, '\\"')
          .replace(/&/g, '","')
          .replace(/=/g, '":"') +
        '"}'
    );
    return result;
  }, [search]);

  return { openModal, closeModal, modalQueryParams };
};

const getUrlParams = (searchParams: SearchParams): string => {
  if (!searchParams || !Object.keys(searchParams).length) {
    return "";
  } else {
    const urlParams = new URLSearchParams(searchParams).toString();
    return "?" + urlParams;
  }
};

export default useModal;
