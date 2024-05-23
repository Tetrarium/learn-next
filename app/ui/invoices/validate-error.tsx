import { State } from "@/app/lib/actions";

/** TODO Реализовать сообщение */

export default function ValidateError({
  id,
  field,
  state,
}: {
  id: string;
  field?: 'customerId' | 'amount' | 'status';
  state: State;
}) {
  return (
    <div id={id} aria-live="polite" aria-atomic="true">
      {state.errors &&
        field !== undefined
        ?
        state.errors[field]?.map((error: string) => (
          <p className="mt-2 text-sm text-red-500" key={error}>
            {error}
          </p>
        ))
        :
        (
          <p className="mt-2 text-sm text-red-500" key={state.message}>
            {state.message}
          </p>
        )
      }
    </div>
  );
}