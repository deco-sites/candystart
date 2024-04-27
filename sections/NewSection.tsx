import { Returns } from "../loaders/NewLoader.ts";
interface Props {
  /**
  * @description The description of name.
  */
  name?: string;
  returns: Returns;
}

export default function Section({ name = "Capy!!!", returns }: Props) {
  return <div>Hello {name} {returns.n}</div>
}