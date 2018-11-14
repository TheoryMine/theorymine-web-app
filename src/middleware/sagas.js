import { watchForRedirect } from "../common/navigation/navigationSagas"

export default function* () {
  yield [
    watchForRedirect()
  ];
}
