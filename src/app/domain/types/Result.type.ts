export type Result<T,E> =
  | {isSuccess : true, value : T}
  | {isSuccess : false, value : E}
